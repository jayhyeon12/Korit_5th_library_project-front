import { css } from "@emotion/react";

export const layout = css`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 5px;
   width: 100%;
   height: 100%;
   background-color: #fafafa33;
`;

export const pageNumbers = css`
   display: flex;

`;

export const pageButton = (isSelected) => css`
   display: flex;
   box-sizing: border-box;
   justify-content: center;
   align-items: center;
   margin-right: 3px;
   border-radius: 2px;
   min-width: 25px;
   height: 25px;
   text-decoration: none;
   border: ${isSelected ? "none" : "1px solid #dbdbdb"};
   background-color: ${isSelected ? "#dbdbdb" : "white"};
   font-size: 10px;
   color: ${isSelected ? "white" : "#777777"};
`;

export const pageCount = css`
   display: flex;
   align-items: center;
   justify-content: center;
   box-sizing: border-box;
   padding: 10px;
   height: 25px;
   background-color: white;
   color: #777777;
   border: 1px solid #dbdbdb;
   cursor: default;
`;

export const page = css`
   margin-right: 10px;
   font-size: 14px;
`

export const count = css`
   font-size: 14px;
`;