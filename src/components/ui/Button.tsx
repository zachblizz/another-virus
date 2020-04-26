import styled from "styled-components";

import { BaseProps, media } from "./";

type ButtonProps = BaseProps & {
    primary?: boolean;
};

export const Button = styled.button`
    border-radius: 3px;
    padding: 0.5rem 0;
    width: 11rem;
    border-radius: 3px;
    background: ${(props: ButtonProps) => (props.primary ? "#ff5252" : "#fff")};
    color: ${(props: ButtonProps) => (props.primary ? "#fff" : "#ff5252")};
    transition: all 100ms ease-in-out;
    border: 2px solid #ff5252;
    font-size: 15px;

    margin-right: ${(props: ButtonProps) => props.marginRight ?? 0}px;
    margin-left: ${(props: ButtonProps) => props.marginLeft ?? 0}px;
    margin-top: ${(props: ButtonProps) => props.marginTop ?? 0}px;
    margin-bottom: ${(props: ButtonProps) => props.marginBottom ?? 0}px;

    &:hover {
        background: #e54949;
        color: #fff;
        cursor: pointer;
    }

    ${media.babybear`
        width: 100%;
    `}
`;
