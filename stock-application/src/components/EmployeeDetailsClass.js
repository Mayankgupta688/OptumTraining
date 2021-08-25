import React from "react";

export class EmployeeDetailsClass extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 10,
            userName: "Mayank",
            age: 23,
            designation: "Developer"
        }

        setInterval(() => {
            this.setState({
                ...this.state,
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    incrementCounter = () => {
        this.setState({
            ...this.state,
            userName: "Anshul",
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Counter Value is: {this.state.counter}</h1>
                <h2>User Name is {this.state.userName}</h2>
                <h2>User Age is {this.state.age}</h2>
                <input type="button" onClick={this.incrementCounter} value="Increase Counter" />
            </div>
        )
    }
}