import styled from "styled-components";
import { sizes } from ".";

type GutterProps = {
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
    inline?: boolean;
}

export const Gutter = styled.div`
    @media (min-width: ${sizes.papabear}px) { 
        display: ${(props: GutterProps) => props.inline ? "inline-block" : "block"};
        margin-right: ${(props: GutterProps) => props.right ?? 0}px;
        margin-left: ${(props: GutterProps) => props.left ?? 0}px;
        margin-top: ${(props: GutterProps) => props.top ?? 0}px;
        margin-bottom: ${(props: GutterProps) => props.bottom ?? 0}px;
    }
`
