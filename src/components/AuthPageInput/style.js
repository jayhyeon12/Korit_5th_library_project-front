import { css } from "@emotion/react";

export const inputBox = css`
    position: relative;
    box-sizing: border-box;
    margin-bottom: 10px;
    width: 100%;
`;

export const input = css`
    outline: none;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 10px 30px 10px 10px;
    width: 100%;
    background-color: white;
    font-size: 14px;
    cursor: pointer;
`;

export const messageBox = (type) => css`
    padding: 5px 20px;
    width: 100%;
    color: ${type === "error" ? "#ff3030" : "#00921b" };
    font-size: 11px;
    font-weight: 600;

`;

export const inputIcon = (type) => css`
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${type === "error" ? "#ff3030" : "#00921b" };
`;