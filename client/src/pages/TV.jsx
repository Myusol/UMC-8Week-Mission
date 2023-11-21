import React from "react";
import Tv from "../Components/Tv";
import { tvs } from "../tvDummy";
import { ProgramContainer } from "./Program.style"

export default function Movies () {
    return (
        <div>
            <ProgramContainer>
                {tvs.results.map((tv) => (
                    <Tv
                        key={tv.id}
                        title={tv.name}
                        poster={tv.poster_path}
                        voteAverage={tv.vote_average}
                        overview={tv.overview}
                    />
                ))}
            </ProgramContainer>
        </div>
    );
};