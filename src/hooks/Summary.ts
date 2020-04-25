import React from "react";

type Data = Record<"Global" | "countries", any>;

type State = {
    data?: Data;
    loading?: boolean;
    error?: any;
};

const initialState: State = {
    data: undefined,
    loading: false,
    error: undefined,
};

export function useSummary() {
    const [state, setState] = React.useState<State>(initialState);
    const countries = React.useMemo(
        () => ["US", "GB", "AE", "TR", "CH", "JA", "IN", "IR", "IS", "CN"],
        [],
    );

    React.useEffect(() => {
        async function getSummary() {
            setState({
                loading: true,
                data: undefined,
                error: undefined,
            });

            try {
                const resp = await fetch("https://api.covid19api.com/summary");
                const rawData = await resp.json();
                const data = {
                    ...rawData,
                    countries: rawData.Countries.map((country: any) => ({
                        country: country.Country,
                        confirmed: country.TotalConfirmed,
                        recovered: country.TotalRecovered,
                        deaths: country.TotalDeaths,
                        code: country.CountryCode,
                    }))
                        .filter((country: any) =>
                            countries.includes(country.code),
                        )
                        .reduce((all: any, country: any) => {
                            const tmpC = [country.country, country.confirmed];
                            const tmpR = [country.country, country.recovered];
                            const tmpD = [country.country, country.deaths];

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
                };

                setState({
                    data,
                    loading: false,
                    error: undefined,
                });
            } catch (e) {
                setState({
                    loading: false,
                    data: undefined,
                    error: e,
                });
            }
        }

        getSummary();
    }, [countries]);

    return { ...state };
}
