import React from "react";
import { Chart } from "react-charts";

import Records from "./records";

import { useSummary } from "../hooks/Summary";
import { ChartContainer } from "./MyChart";
import { Disclaimer } from "./ui/Disclaimer";

export function Summary() {
    const { data, loading } = useSummary();
    const axes = React.useMemo(() => {
        return [
            { primary: true, type: "ordinal", position: "bottom" },
            { type: "linear", position: "left" },
        ];
    }, []);
    const colors = React.useMemo(() => ["#e0be36", "#00bd9d", "#ff5252"], []);

    return (
        <div>
            {loading && <div>loading...</div>}
            {data && (
                <Records
                    records={["NewConfirmed", "NewDeaths", "NewRecovered"]}
                    data={data.Global}
                />
            )}
            {data && (
                <Records
                    records={[
                        "TotalConfirmed",
                        "TotalDeaths",
                        "TotalRecovered",
                    ]}
                    data={data.Global}
                />
            )}
            <ChartContainer>
                {data && (
                    <>
                        <Chart
                            data={data.countries}
                            axes={axes}
                            series={{ type: "bar" }}
                            getSeriesStyle={(series: any) => ({
                                color: colors[series.index],
                            })}
                            tooltip
                        />
                        <Disclaimer>* showing total counts</Disclaimer>
                    </>
                )}
            </ChartContainer>
        </div>
    );
}
