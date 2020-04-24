import styled from "styled-components";

type GutterProps = {
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
    inline?: boolean;
}

export const Gutter = styled.div`
    display: ${(props: GutterProps) => props.inline ? "inline-block" : "block"};
    margin-right: ${(props: GutterProps) => props.right}px;
    margin-left: ${(props: GutterProps) => props.left}px;
    margin-top: ${(props: GutterProps) => props.top}px;
    margin-bottom: ${(props: GutterProps) => props.bottom}px;
`
