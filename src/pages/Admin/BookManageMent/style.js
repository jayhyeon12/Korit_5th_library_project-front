import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 100%;
    
`;

export const header = css`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;

    & > h1 {
        margin: 0;
        margin-bottom: 20px;
        font-size: 25px;
    }
`;

export const topLayout = css`
    display: flex;
    width: 100%;

`;

export const registerTable = css`
    box-sizing: border-box;
    border-collapse: collapse;
    border: 1px solid #dbdbdb;
    width: 100%;
    border-radius: 3px;
    background-color: #fdfdfd;

    & td {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        background-color: white;
    }

`;

export const registerTh = css`
    box-sizing: border-box;
    width: 80px;
    padding: 5px;
    border: 1px solid #dbdbdb;
    cursor: default;
`;

export const preview = css`
    box-sizing: border-box;
    width: 140px;
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 150px;
    height: 100%;
    & > img {
        height: 150px
    }
`;

export const imgUrl = css`
    align-items: flex-end;
    display: flex;

`

export const imgUrlBox = css`
    display: inline-block;
    width: 95%;
    line-height: 10px;
`;

export const imgAddButton = css`
    display: flex;
    align-items: flex-end;
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
    & > * {
        font-size: 20px;

    }
`;