import React from "react";
import styled from "styled-components";
import { Chart } from "react-charts";

import { useCountry } from "../hooks/Form";

import { RecordHeader } from "./ui/RecordHeader";
import { Row } from "./ui/Row";

const ChartContainer = styled.div`
    width: 1200px;
    height: 600px;
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
    const series = React.useMemo(
        () => ({
            showPoints: false,
        }),
        [],
    );
    const records = React.useMemo(
        () => ["date", "confirmed", "death", "recovered"],
        [],
    );
    const colors = React.useMemo(() => ["#e0be36", "#00bd9d", "#ff5252"], []);

    return (
        <ChartContainer>
            {loading && <div>loading...</div>}
            <Row>
                {data &&
                    records.map((header) => (
                        <RecordHeader
                            key={header}
                            label={header}
                            value={data[header] || 0}
                            confirmed={header === "confirmed"}
                            recovered={header === "recovered"}
                            death={header === "death"}
                        />
                    ))}
            </Row>
            {data && (
                <Chart
                    data={data.data}
                    axes={axes}
                    series={series}
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
