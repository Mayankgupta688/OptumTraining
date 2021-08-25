import React from 'react';

export default class AsynchOperation extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            this.setState({
                counter: this.state.counter + 1
            }, () => {
                this.setState({
                    counter: this.state.counter + 1
                }, () => {
                    this.setState({
                        counter: this.state.counter + 1
                    }, () => {
                        this.setState({
                            counter: this.state.counter + 1
                        })
                    })
                })
            })
        });
    }

    render() {
        return (
            <div>
                <h1>Counter Value is {this.state.counter}</h1>
                <input type="button" value="Increment Counter" onClick={this.incrementCounter} />
            </div>
        )
    }
}