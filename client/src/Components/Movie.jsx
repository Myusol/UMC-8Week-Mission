import React from "react";
import { ProgramContents, ProgramPoster, ProgramInfo, ProgramDetail } from './Program.style'
import { useNavigate } from 'react-router-dom';

export default function Movie(props) {
    const navigate = useNavigate();

    const onClickMovie = () => {
      navigate(`/Movies/${props.title}`, {
        state: {
          title: props.title,
          poster: props.poster,
          overview: props.overview,
          voteAverage: props.voteAverage
        },
      });
    };

    return (
        <ProgramContents onClick={onClickMovie} style={{backgroundColor: 'rgba(55, 59, 105, 1)'}}>
            <ProgramPoster src={`https://image.tmdb.org/t/p/w1280/${props.poster}`} alt={`${props.title} 포스터`} />
            <ProgramInfo style={{backgroundColor: 'rgba(55, 59, 105, 1)'}}>
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