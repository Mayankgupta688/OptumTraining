import React from 'react';

export default class ContainerComponent extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.state.randomNumber = 1000;
        this.state.userName = "Mayank"
    }

    setData = () => {
        this.setState({
            userName: "Anshul",
            randomNumber: 3000
        })
    }

    render() {
        return (
            <div>
                <h1>The Random Number is {this.state.randomNumber}</h1>
                <h2>The Random Number is {this.state.userName}</h2>
                <input type="button" value="Set Data" onClick={this.setData} />
            </div>
        )
    }
}