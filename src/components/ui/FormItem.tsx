import React from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { Gutter } from "./Gutter";

type Props = {
    name: string;
    label?: string;
    error?: string;
    type?: string;
    register?: any;
};

const ErrorSpan = styled.div`
    color: #ff5252;
    font-size: 10px;
`;

const FormDiv = styled.div`
    padding: 10px;
`;

export default function FormItem({
    name,
    label,
    error,
    register,
    type = "text",
}: Props) {
    return (
        <FormDiv>
            <label>
                <Gutter inline right={10}>
                    {label}
                </Gutter>
                <Input
                    name={name}
                    ref={register}
                    type={type}
                    error={Boolean(error)}
                />
                {error && (
                    <Gutter left={65}>
                        <ErrorSpan>{error}</ErrorSpan>
                    </Gutter>
                )}
            </label>
        </FormDiv>
    );
}
