import { css } from "styled-components";

const heading = {
    headingXL: css`
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
    headingL: css`
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
    headingM: css`
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
    headingS: css`
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 2.4px;
    `
};

const body = {
    medium: css`
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    `,
    large: css`
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px;
    `
};

export const typography = {
    heading,
    body
};
