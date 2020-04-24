import React from "react";
import styled from "styled-components";

import { Gutter } from "./Gutter";

type RecordProps = {
    label: string;
    value: string;
    death?: boolean;
    confirmed?: boolean;
    recovered?: boolean;
};

const Header = styled.h3`
    color: ${({
        death,
        recovered,
        confirmed,
    }: Pick<RecordProps, "death" | "confirmed" | "recovered">) =>
        death
            ? "#ff5252"
            : recovered
            ? "#00BD9D"
            : confirmed
            ? "#E0BE36"
            : "#333"};
`;

const RecordContainer = styled.div`
    text-align: center;
    color: #555;
`;

export function RecordHeader({
    label,
    value,
    death,
    confirmed,
    recovered,
}: RecordProps) {
    return (
        <Gutter bottom={20}>
            <RecordContainer>
                <Header
                    confirmed={confirmed}
                    death={death}
                    recovered={recovered}
                >
                    {value}
                </Header>
                <Gutter top={-20}>{label}</Gutter>
            </RecordContainer>
        </Gutter>
    );
}
