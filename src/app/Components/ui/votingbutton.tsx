"use client"
import React, {useState} from "react";
import axios from "axios";
import Chart from "./chart"

export function VotingButton({
    crypto,
    votes,
}:{
    crypto: string,
    votes:{bullish: number, bearish: number},
}){
    const [disabled, setDisabled] = useState(false);
    const [error, seterror] = useState(false);
    const [voted, setvoted] = useState(false);

    async function handleClick(direction: string){
        const date = new Date().getDate();
        if(date === parseInt(localStorage.getItem(crypto)!)){
            setvoted(true);
            setDisabled(true);
            return;
        }
        localStorage.setItem(crypto, `${date}`)

        let bullishValue = 0;
        let bearishValue = 0;

        if(direction === "bullish"){
            bullishValue = 1;
        }else(direction === "bearish"){
            bearishValue = 1;
        }

        try{
            await axios.get(`${process.env.NEXT_PUBLIC_BASE}/api/${crypto}`, {
                params: {
                    bullish: bullishValue,
                    bearish: bearishValue
                }
            });
        } catch(e){
            seterror(true);
        }
        setDisabled(true);
    }
}

function Erroralert({title, message}: {title: string, message: string}){
    return(
        <div 
        className=""
    )
}
