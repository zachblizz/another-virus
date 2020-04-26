import styled from "styled-components";

import { BaseProps, sizes } from "./";

type InputProps = BaseProps & {
    error?: boolean;
    ref?: any;
};

export const Input = styled.input`
    border-radius: 3px;
    padding: 0.5rem;
    width: 11rem;
    border-radius: 3px;
    font-size: 15px;
    border: 2px solid ${(props: InputProps) => props.error ? "#ff5252" : "#ccc" };
    background: ${(props: InputProps) => props.error ? "#ff7474" : "#fff" };
    color: ${(props: InputProps) => props.error ? "#fff" : "#333" };
    border-radius: 3px;

    margin-right: ${(props: InputProps) => props.marginRight ?? 0}px;
    margin-left: ${(props: InputProps) => props.marginLeft ?? 0}px;
    margin-top: ${(props: InputProps) => props.marginTop ?? 0}px;
    margin-bottom: ${(props: InputProps) => props.marginBottom ?? 0}px;

    @media (max-width: ${sizes.babybear}px) {
        width: 96%;
    }
`;
