import { css } from "styled-components";

export type BaseProps = {
    marginRight?: number;
    marginLeft?: number;
    marginTop?: number;
    marginBottom?: number;
};

// taken from https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053
export const sizes: Record<string, number> = {
    papabear: 1000,
    brotherbear: 900,
    mamabear: 700,
    babybear: 400,
};

export const media = Object.keys(sizes).reduce((acc: any, label: string) => {
    acc[label] = (args: TemplateStringsArray) => css`
        @media (max-width: ${sizes[label]}px) {
            ${css(args)};
        }
    `;
    return acc;
}, {});
