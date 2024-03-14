import { css } from "@emotion/react";

export const layout = (show) => css`
    transition: all 0.5s ease-in-out;
    opacity: ${show? 1 : 0};
    position: absolute;
    left: ${show ? "0" : "-200px"};
    top: 0;
    box-sizing: border-box;
    border-right: 1px solid #dbdbdb;
    padding: 15px 0px;
    width: 200px;
    height: 100%;
    background-color: #fafafa;
`;

export const header = css`
    box-sizing: border-box;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 10px;
    width: 100%;
    height: 50px;
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

export const profile = css`
    width: 100%;
    height: 200px;

`;

export const menuList = css`
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 150px;
`;

export const menuLink = css`
   box-sizing: border-box;
   display: flex;
   align-items: center;
   border-bottom: 1px solid #dbdbdb;
   height: 40px;
   padding: 0px 20px;
   background-color: #fdfdfd;
   font-size: 14px;
   font-weight: 600;
   text-decoration: none;
   color: #222222;
`;