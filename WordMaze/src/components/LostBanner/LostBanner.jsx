import React from "react";

import Banner from "../Banner/Banner";

export default function LostBanner({answer}){
    return <Banner status='happy'>
            <p>Sorry, the correct answer is <strong>
                {answer}</strong>
            </p>
    </Banner>
}