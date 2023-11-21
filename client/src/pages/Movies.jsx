import React from "react";
import Movie from "../Components/Movie"; // Movie 컴포넌트를 import합니다.
import { movies } from "../movieDummy";
import { ProgramContainer } from "./Program.style"

export default function Movies () {
    return (
        <div>
            <ProgramContainer>
                {movies.results.map((movie) => (
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        poster={movie.poster_path}
                        voteAverage={movie.vote_average}
                        overview={movie.overview}
                    />
                ))}
            </ProgramContainer>
        </div>
    );
};