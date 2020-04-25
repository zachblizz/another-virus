import styled from "styled-components";

import { RecordProps } from "../records/RecordHeader";
import { media } from ".";

export const Header = styled.h3`
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

    ${media.babybear`
        margin: 0px 5px;
    `}
`;

export const RecordContainer = styled.div`
    text-align: center;
    color: #555;
`;
