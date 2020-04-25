import styled from "styled-components";

import { BaseProps } from "./";

type ButtonProps = {
    primary?: boolean;
} & BaseProps;

export const Button = styled.button`
    height: 27px;
    border-radius: 3px;
    background: ${(props: ButtonProps) => (props.primary ? "#ff5252" : "#fff")};
    color: ${(props: ButtonProps) => (props.primary ? "#fff" : "#ff5252")};
    transition: all 100ms ease-in-out;
    border: 3px solid #ff5252;

    margin-right: ${(props: ButtonProps) => props.marginRight}px;
    margin-left: ${(props: ButtonProps) => props.marginLeft}px;
    margin-top: ${(props: ButtonProps) => props.marginTop}px;
    margin-bottom: ${(props: ButtonProps) => props.marginBottom}px;

    &:hover {
        background: #e54949;
        color: #fff;
        cursor: pointer;
    }
`;
