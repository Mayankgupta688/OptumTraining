import React from "react";
import "./styles/DataInterpolationStyles.css";

export function DataInterpolation() {
    var name = "TechnoFunnel";
    var currentTime = "";
    function getAgeData() {
        return 33;
    }

    var styleData = {
        b: {
            color: "red",
            border: "1px solid red"
        }, label: {
            color: "red"
        }
    }

    function getUserName(event) {
        event.target.value = "This is Sample Button";
        event.target.parentNode.parentNode.style.color = "blue";

        // event.target.parentNode.parentNode.parentNode.children[1].children[0].children[0].textContent = "Mayank Gupta"
    }

    function getCurrentTime() {
        currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }

    getCurrentTime();

    return (
        <div>
            <h1>Welcome to { name }</h1>
            <h2 style={{"color": "red", margin: "105px"}}>Trainer Age is { getAgeData() -10 }</h2>
            <h3>Current Time is { currentTime }</h3>
            <input type="button" value="Click for Current Name" onClick={getUserName} /><br/><br/>

            <b style={styleData.b}>This is Bold Tag</b><br/><br/>
            <label style={styleData.label}>This is Label</label>
        </div>
    )
}