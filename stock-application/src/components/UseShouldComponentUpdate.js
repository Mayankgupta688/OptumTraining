import React from 'react';

export default class UseShouldComponentUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 33,
            designation: "developer"
        }
    }

    updateData = () => {
        debugger;
        this.setState({
            ...this.state,
            age: 35
        });
    }

    updateName = () => {
        debugger;
        this.setState({
            ...this.state,
            name: "Mayank Gupta"
        });
    }


    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.name !== this.state.name) {
            alert("Render is Triggered....")
            return true;
        }

        alert("Render is not Triggered....")
        return false;
    }

    render() {
        alert("Render Execution")
        return (
            <div>
                <h1>User Name is {this.state.name}</h1>
                <input type="button" onClick={this.updateData} value="Update Data" />
                <input type="button" onClick={this.updateName} value="Update Name" />
            </div>
        )
    }
}