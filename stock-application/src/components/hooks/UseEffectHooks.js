import React, { useEffect, useState} from "react";


export function UseEffectHooks() {

    var [counter, setCounter] = useState(0)
    var [otherCounter, setOtherCounter] = useState(100);

    useEffect(() => {
        console.log("This is Always Called....")
    })

    useEffect(() => {
        console.log("Component Initialized")
        return () => {
            alert("This is Component Unmounting Equivalent......")
        }
    }, []);

    useEffect(() => {
        console.log("Counter Value Updated...")

        return () => {
            console.log("Counter Need to be updated...")
        }
    }, [counter]);

    useEffect(() => {
        console.log("Other Counter Value Updated...")
    }, [otherCounter]);

    

    function updateCounter() {
        setCounter(counter + 1)
    }

    function updateOtherCounter() {
        setOtherCounter(otherCounter + 1)
    }
    return (
        <div>
            <h1>The Counter Value is {counter}</h1>
            <input type="button" value="Update Timer" onClick={updateCounter} /><hr/>

            <h1>The Counter Value is {otherCounter}</h1>
            <input type="button" value="Update Timer" onClick={updateOtherCounter} />
        </div>
    )
}