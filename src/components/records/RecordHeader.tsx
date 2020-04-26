import React from "react";

import { RecordContainer, Header, RecordLabel } from "../ui/Record";

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
        <RecordContainer>
            <RecordLabel>{label}</RecordLabel>
            <Header death={death} confirmed={confirmed} recovered={recovered}>
                {value ?? 0}
            </Header>
        </RecordContainer>
    );
}
