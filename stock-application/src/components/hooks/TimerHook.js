import React, { useState} from "react";


export function TimerHooks() {
    debugger;
    function getCurrentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    var [timer, setTimer] = useState(getCurrentTime());

    setTimeout(() => {
        setTimer(getCurrentTime());
        console.log("This Interval is Called...")
    }, 1000)

    return (
        <div>
            <h1>The Current Timer is {timer}</h1>
        </div>
    )
}