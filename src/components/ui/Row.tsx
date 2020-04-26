import styled from "styled-components";
import { media } from ".";

type Props = {
    top?: number;
    bottom?: number;
    spacing?: string;
}

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props: Props) => props.spacing ?? "space-between"};
    margin-top: ${(props: Props) => props.top ?? 15}px;
    margin-bottom: ${(props: Props) => props.bottom ?? 15}px;

    ${media.babybear`
        margin: 10px 0px;
    `}
`;
