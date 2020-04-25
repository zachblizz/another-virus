import styled from "styled-components";
import { media } from ".";

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ${media.babybear`
        margin: 10px 0px;
    `}
`;
