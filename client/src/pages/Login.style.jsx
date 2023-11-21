import styled from "styled-components";

export const LoginpageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 700px;
    margin: 100px auto;
    gap: 10px;
    padding-left: 90px; 
    padding-right: 105px;
    padding-top: 50px; 
    padding-bottom: 80px; 
    border: 4px solid #EBEBEB;
    border-radius: 15px;

    h2{
        text-align: left;
        align-items: left;
        font-size: 35px;
        font-weight: bold;
        margin-left: 0;
        margin-bottom: 5px;
    }
`;

export const LoginInfo = styled.div`
    text-align: left;
    align-items: left;
    font-size: 19px;
    margin-left: 0;
    margin-bottom: 20px;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    color: rgba(0, 0, 0, 1);
    gap: 5px;
    margin-bottom: 10px;

    label{
        font-size: 17px;
    }

    input{
        width: 680px;
        font-size: 15px;
        margin-bottom: 10px;
        border-radius: 8px;
        margin-bottom: 10px;
        padding: 15px 20px; /* 입력된 텍스트의 시작 위치 조정 */
        border: 2px solid #EBEBEB; /* 포커스 해제 시 회색 테두리 */
        outline: none; /* 기본 포커스 효과 제거 */
    }

    input:focus {
        border: 2px solid #000000; /* 포커스 시 검은색 테두리 */
    }
`;

export const ConfirmBtn = styled.button`
    width: 720px;
    height: 45px;
    background-color:  ${props => (props.disabled ? '#DADADA' : '#032641')};
    color: rgba(255, 255, 255, 1);
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 30px;
    margin-top: 20px;
`;
