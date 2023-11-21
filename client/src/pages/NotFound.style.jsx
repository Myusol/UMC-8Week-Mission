import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 30px 150px;
    gap: 10px;

    h2{
        font-size: 30px;
        font-weight: bold;
    }

    div{
        display: flex;
        font-size: 17px;
        color: rgba(0, 0, 0, 1);
    }
`;

export const LinkHome = styled(Link)`
    text-decoration: none;
    font-size: 17px;
    color: rgba(255, 0, 0, 1);
`;