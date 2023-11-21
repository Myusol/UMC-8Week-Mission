import React from "react";
import { useLocation, useParams } from 'react-router-dom'
import { DetailContent, DetailPoster, DetailBox, DetailTitle, DetailOverview, DetailRate } from './Program.style'

export default function MovieDetail() {
    //url로 넘겨 받은 title
    const { title } = useParams(); 
		
    //네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
    //이미지, 별점 등의 모든 정보들
    const { state } = useLocation();

    return (
        <DetailContent>
            <DetailPoster src={`https://image.tmdb.org/t/p/w1280/${state.poster}`} alt={`${title} 포스터`} />
            <DetailBox>
                <DetailTitle> {title} </DetailTitle>
                <DetailOverview>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '6px' }}> 줄거리 <br /> </div>
                    {state.overview} </DetailOverview>
                <DetailRate>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '6px' }}> 평점 <br /> </div>
                    ★ {state.voteAverage} </DetailRate>
            </DetailBox>
        </DetailContent>
    );
};