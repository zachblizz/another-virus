import styled from "styled-components";

import { RecordProps } from "../records/RecordHeader";
import { media } from ".";

export const Header = styled.h2`
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
    margin-top: 2px;
    margin-bottom: 0px;

    ${media.babybear`
        margin: 0px 5px;
    `}
`;

export const RecordLabel = styled.div`
    font-size: 14px;
    text-transform: capitalize;
`;

export const RecordContainer = styled.div`
    color: #555;
`;
