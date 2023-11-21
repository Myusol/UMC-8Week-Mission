import React from "react";
import { ProgramContents, ProgramPoster, ProgramInfo, ProgramDetail } from './Program.style'
import { useNavigate } from 'react-router-dom';

export default function Tv(props) {
    const navigate = useNavigate();

    const onClickTv = () => {
      navigate(`/Tvs/${props.title}`, {
        state: {
            title: props.title,
            poster: props.poster,
            overview: props.overview,
            voteAverage: props.voteAverage
        },
      });
    };
    
    return (
        <ProgramContents onClick={onClickTv} style={{backgroundColor: 'rgba(54, 75, 108, 1)'}}>
            <ProgramPoster src={`https://image.tmdb.org/t/p/w1280/${props.poster}`} alt={`${props.title} 포스터`} />
            <ProgramInfo style={{backgroundColor: 'rgba(54, 75, 108, 1)'}}>
                <div className="Program-title">{props.title}</div>
                <div className="Program-rate">★{props.voteAverage}</div>
            </ProgramInfo>
            <ProgramDetail>
                <div className="Program-detail-title">{props.title}</div>
                <div className="Program-detail-overview">{props.overview}</div>
            </ProgramDetail>
        </ProgramContents>
    );
};