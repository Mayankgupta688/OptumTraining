import React from "react";

export class EmployeeDetailsClass extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 10
        }
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Counter Value is: {this.state.counter}</h1>
                <input type="button" onClick={this.incrementCounter} value="Increase Counter" />
            </div>
        )
    }
}