import React from 'react';
import { Observable } from "rxjs";

export default class RjxsExample extends React.Component {
    constructor() {
        super();
        this.state = {
            randomNumber: 0,
            otherRandomNumber: 0
        }

        this.setState({
            randomNumber: Math.floor(Math.random() * 1000)
        })

        setInterval(() => {
            var random = Math.floor(Math.random() * 100)
            this.setState({
                randomNumber: random
            })
        }, 1000)

        this.getRandomNumber();
    }

    getRandomNumber() {

        var myObservable = new Observable((observer) => {
            setInterval(() => {
                var random = Math.floor(Math.random() * 100)
                observer.next(random);
            }, 1000)
        });

        myObservable.subscribe((data) => {
            this.setState({
                otherRandomNumber: data
            })
        })

    }

    render() {
        return (
            <div>
                <h1>The random number is {this.state.randomNumber}</h1>
                <h2>The other random number is {this.state.otherRandomNumber}</h2>
            </div>
        )
    }
}