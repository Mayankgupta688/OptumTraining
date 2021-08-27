import React, { useState } from "react";

export function CounterHook() {
    var [counter, setCounter] = useState(0)

    function updateCounter() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>The Counter Value is {counter}</h1>
            <input type="button" value="Update Timer" onClick={updateCounter} />
        </div>
    )
}