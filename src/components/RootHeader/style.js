import { css } from "@emotion/react";

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    width: 100%;
    height: 50px;
    padding: 0px 10px;
    border-bottom: 1px solid #dbdbdb;

`;

export const menuButton = css`
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    padding: 10px;
    cursor: pointer;

    & > * {
        font-size: 16px;
    }

`;