import styled from "styled-components";

import { BaseProps } from "./";

type InputProps = {
    error?: boolean;
    ref?: any;
} & BaseProps;

export const Input = styled.input`
    padding: 5px;
    border: 1px solid ${(props: InputProps) => props.error ? "#ff5252" : "#ccc" };
    background: ${(props: InputProps) => props.error ? "#ff7474" : "#fff" };
    color: ${(props: InputProps) => props.error ? "#fff" : "#333" };
    border-radius: 3px;

    margin-right: ${(props: InputProps) => props.marginRight}px;
    margin-left: ${(props: InputProps) => props.marginLeft}px;
    margin-top: ${(props: InputProps) => props.marginTop}px;
    margin-bottom: ${(props: InputProps) => props.marginBottom}px;
`;
