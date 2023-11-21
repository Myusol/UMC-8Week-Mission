import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
`;

export const LoginBtn = styled.button`
    border: none;
    width: 90px;
    background-color: #ffffff;
    color: #032541;
    font-size: 15px;
    border-radius: 20px;
    padding: 6px 10px;
    cursor: pointer;
`;

export const LoginState = styled.p`
    margin-left: 15px; /* 버튼과 텍스트 사이의 간격 조절 */
`;