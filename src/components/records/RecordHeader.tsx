import React from "react";

import { Gutter } from "../ui/Gutter";
import { RecordContainer, Header } from "../ui/Record";

export type RecordProps = {
    label: string;
    value: string;
    death?: boolean;
    confirmed?: boolean;
    recovered?: boolean;
};

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
                    {value ?? 0}
                </Header>
                <Gutter top={-20} style={{ fontSize: 14 }}>
                    {label}
                </Gutter>
            </RecordContainer>
        </Gutter>
    );
}
