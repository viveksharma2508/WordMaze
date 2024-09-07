import React, { useState } from "react";

export default function TentativeGuess({handleSubmitGuess}){
    const [TentativeGuess, setTentativeGuess] = React.useState('');
    function handleSubmit (event){
        event.preventDefault();

        if (TentativeGuess.length!==5) {
            window.alert('Please enter exactly 5 characters')
            return;
        }

        handleSubmitGuess(TentativeGuess);

        setTentativeGuess('');
    }
    return (
        <form onSubmit={handleSubmit} className="guess-input-wrapper">
            <label htmlFor="guess-input">Enter Your Guess:</label>
            <input
            required
            minlength={5}
            maxlength= {5}
            value = {TentativeGuess}
            onChange={(event)=>{
                const nexttentativeGuess = event.target.value.toUpperCase()
                setTentativeGuess(nexttentativeGuess);
            }}
            id="TentativeGuess-input" 
            type = "text" />
        </form>
    );
}