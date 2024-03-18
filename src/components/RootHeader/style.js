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

export const account = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 8px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    overflow: hidden;
    text-decoration: none;
    color: #222222;
    cursor: pointer;
`;