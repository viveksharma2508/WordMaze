import React from "react";

import Banner from "../Banner/Banner";

export default function WonBanner({numOfGuesses}){
    return <Banner status='happy'>
            <p>
                    <strong>Congrulations!</strong> Got it in
                    {''}
                    <strong>
                        {numOfGuesses === 1 ? '1 guess'
                        :`${numOfGuesses}guesses`}
                    </strong>
                </p>
    </Banner>
}