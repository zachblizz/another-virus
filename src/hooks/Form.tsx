import React from "react";
import { OnSubmit } from "react-hook-form";
import moment from "moment";

type CountryContext = {
    loading: boolean;
    data?: any;
    error?: any;
    getData?: OnSubmit<Record<string, any>>;
};

type CountryState = Pick<CountryContext, "loading" | "data" | "error">;

const initialState: CountryState = {
    loading: false,
    data: undefined,
    error: undefined,
};

const CountryContext = React.createContext<CountryContext>(initialState);

function CountryProvider({ children }: { children: React.ReactChild }) {
    const [state, setState] = React.useState<CountryState>(initialState);

    const getData = React.useCallback(async function (values: Record<string, any>) {
        setState({ data: undefined, loading: true });

        try {
            console.log("calling....")
            const resp = await fetch(
                `https://api.covid19api.com/country/${values.country}`,
            );
            const rawData = await resp.json();
            if (!rawData.message && rawData.length > 0) {
                const currInfo = rawData[rawData.length - 1];
                const data = {
                    data: rawData
                        .map((item: any) => ({
                            confirmed: item.Confirmed,
                            deaths: item.Deaths,
                            recovered: item.Recovered,
                            date: item.Date,
                        }))
                        .reduce((all: any, item: any) => {
                            const tmpC = [new Date(item.date), item.confirmed];
                            const tmpR = [new Date(item.date), item.recovered];
                            const tmpD = [new Date(item.date), item.deaths];

                            if (all.length === 0) {
                                all.push({ label: "confirmed", data: [tmpC] });
                                all.push({ label: "recovered", data: [tmpR] });
                                all.push({ label: "deaths", data: [tmpD] });
                            } else {
                                all[0].data.push(tmpC);
                                all[1].data.push(tmpR);
                                all[2].data.push(tmpD);
                            }

                            return all;
                        }, []),
                    confirmed: currInfo.Confirmed,
                    deaths: currInfo.Deaths,
                    recovered: currInfo.Recovered,
                    date: moment(currInfo.Date).format("MMMM DD YYYY"),
                };

                setState((s: CountryState) => ({
                    ...s,
                    data,
                    error: undefined,
                }));
            } else {
                setState((s: CountryState) => ({
                    ...s,
                    data: undefined,
                    error: rawData
                }));
            }
        } catch (e) {
            setState((s: CountryState) => ({
                ...s,
                error: e,
                data: undefined,
            }));
        } finally {
            setState((s: CountryState) => ({ ...s, loading: false }));
        }
    }, [setState]);

    return (
        <CountryContext.Provider value={{ ...state, getData }}>
            {children}
        </CountryContext.Provider>
    );
}

function useCountry() {
    const context = React.useContext(CountryContext);
    if (context === undefined) {
        throw new Error("useCountry must be used within a CountryContext");
    }

    return context;
}

export { useCountry, CountryProvider };
