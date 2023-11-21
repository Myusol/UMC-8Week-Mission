import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

export const FixedHeader = styled.div`
    background-color: #032541;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    padding-left: 160px;
`;

export const HomeNav = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 35px;
    flex: 1;
`;

export const LinkA = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
`;