import { css } from "@emotion/react";

export const layout = (show) => css`
    transition: all 0.5s ease-in-out;
    opacity: ${show? 1 : 0};
    position: absolute;
    left: ${show ? "0" : "-200px"};
    top: 0;
    z-index: 90;
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

export const authButton = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    height: 100%;
    box-sizing: border-box;
    align-items: center;

    & > button {
        border: 1px solid #dbdbdb;
        box-sizing: border-box;
        border-radius: 3px;
        background-color: white;
        margin-bottom: 5px;
        padding: 5px;
        font-weight: 600;
        cursor: pointer;

        & > hover {
            background-color: #fafafa;
        }

        & > active {
            background-color: #eeeeee;
        }
    }
`;

export const settings = css`
    display: flex;
    justify-content: flex-end;
    padding: 5px 10px 0px 10px;

    & > * {
        padding: 5px;
        cursor: pointer;
    }
`;

export const profileBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const profileImg = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: white;
    
`;

export const info = css`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    cursor: default;

    & > span:nth-of-type(1) {
        font-weight: 600;
    }

    & > span:nth-of-type(2) {
        font-size: 12px;
    }
`;

export const menuList = css`
    
    
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