import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    React.createElement("div", {}, [
        React.createElement("h1", {}, "Hello All"),
        React.createElement("div", {}, [
            React.createElement("h2", {}, "Hi All..."),
            React.createElement("div", {}, 
                React.createElement("h3", {}, "Sample data")
            )
        ])
    ]),
    
    document.getElementById("root")
);
