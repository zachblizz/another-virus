import React from "react";
import styled from "styled-components";
import { Chart } from "react-charts";

import { useCountry } from "../hooks/Form";

import Records from "./records";
import { media } from "./ui";

export const ChartContainer = styled.div`
    width: 100%;
    height: 500px;

    ${media.babybear`
        height: 400px;
    `}
`;

const ErrorHeader = styled.h3`
    color: #ff5252;
`;

export default function MyChart() {
    const { data, error, loading } = useCountry();
    const axes = React.useMemo(() => {
        return [
            { primary: true, type: "utc", position: "bottom" },
            { type: "linear", position: "left" },
        ];
    }, []);
    const records = React.useMemo(
        () => ["date", "confirmed", "death", "recovered"],
        [],
    );
    const colors = React.useMemo(() => ["#e0be36", "#00bd9d", "#ff5252"], []);

    return (
        <ChartContainer>
            {loading && <div>loading...</div>}
            {data && <Records records={records} data={data} start={1} />}
            {data && (
                <Chart
                    data={data.data}
                    axes={axes}
                    tooltip
                    getSeriesStyle={(series: any) => {
                        return {
                            color: colors[series.index],
                        };
                    }}
                />
            )}
            {error && (
                <ErrorHeader>{error?.message ?? "No Data Found"}</ErrorHeader>
            )}
        </ChartContainer>
    );
}
