import React from 'react';

export default class ForceUpdatingComponents extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "Mayank Gupta ",
            counter: 0
        }
    }

    triggerUpdate = () => {
        
        this.state.userName = "Anshul Gupta";
        this.state.counter = this.state.counter + 1;
        this.state.counter = this.state.counter + 1;
        this.state.counter = this.state.counter + 1;
        this.state.counter = this.state.counter + 1;
        this.state.counter = this.state.counter + 1;

        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <h1>User Name is {this.state.userName}</h1>
                <h2>Counter value is {this.state.counter}</h2>
                <input type="button" value="Trigger Update" onClick={this.triggerUpdate} />
            </div>
        )
    }
}