import styled from "styled-components";

export const ProgramContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-template-rows: 380px;
    gap: 20px;
    justify-content: center;
    margin: 30px 160px;
`;

export const DetailContent = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px auto;
`;

export const DetailPoster = styled.img`
    width: 280px;
    height: 400px;
`;

export const DetailBox = styled.div `
    margin-left: 20px;
    flex-direction: column;
    text-align: left;
`;

export const DetailTitle = styled.div `
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: left;
`;

export const DetailOverview = styled.div `
    margin-bottom: 20px;
    width: 730px;
    font-size: 18px;
    text-align: left;
`;

export const DetailRate = styled.div `
    font-size: 18px;
    text-align: left;
`;