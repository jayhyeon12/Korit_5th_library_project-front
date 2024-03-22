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
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    text-decoration: none;
    color: #222222;
    cursor: pointer;
`;

export const accountItems = css`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const logout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 0;
    border: none;
    overflow: hidden;
    background-color: transparent;
    cursor: pointer;
`;