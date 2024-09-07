import React from "react";
import {sample} from "../utils"
import { WORDS } from "../data";
import Guess from "../GuessInput/GuessInput";
import GuessRes from "../GuessResult/GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../constants";

import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

const answer = sample(WORDS);

//To make debugging easier, we will log the answer in 
// the console
console.info({answer});

export default function Game(){
    const[gameStatus, setGameStatus] = React.useState("running");
    const[guesses, setGuesses] = React.useState([]);

    function handleSubmitGuess(TentativeGuess){
        const nextGuesses = [...guesses, TentativeGuess]
        setGuesses(nextGuesses);

        if (TentativeGuess === answer) {
            setGameStatus('won');
        }

        else if(nextGuesses.length >= NUM_OF_GUESSES_ALLOWED){
            setGameStatus('lost');
        }
    }
    return<>
       {gameStatus}
       <GuessRes guesses={guesses} answer={answer}/>
       <Guess  handleSubmitGuess={handleSubmitGuess} />
       {gameStatus === "won" &&(
            <WonBanner  
                numOfGuesses={guesses.length}
            />
       )}
       {gameStatus === "lost" &&(
            <LostBanner  
                answer={answer}
            />
       )}
    </>;
}