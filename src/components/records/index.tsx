import React from "react";

import { Row } from "../ui/Row";
import { RecordHeader } from "./RecordHeader";

type Props = {
    records: string[];
    data: any;
    start?: number;
};

export default function Records({ records, data, start = 0 }: Props) {
    return (
        <Row>
            {records.map((r) => (
                <RecordHeader
                    key={r}
                    label={r}
                    value={data[r]}
                    confirmed={r === records[start]}
                    recovered={r === records[start + 1]}
                    death={r === records[start + 2]}
                />
            ))}
        </Row>
    );
}
