import React from 'react';
import { Observable } from "rxjs";
import Axios from "axios";

export default class SBIWithObservable extends React.Component {
    constructor() {
        super();
        this.state = {
            stockValue: 415,
            lastValue: 415
        }

        this.getStockData();
    }

    getStockData() {
        var stockDataObservable = new Observable((observer) => {
            setInterval(() => {
                Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then((response) => {
                    observer.next(response.data.data.pricecurrent);
                    if(this.state.lastValue !== response.data.data.pricecurrent) {
                        observer.next(response.data.data.pricecurrent);
                    } else {
                        console.log("Set State not triggered...")
                    }
                })
            }, 10000)
        })

        stockDataObservable.subscribe((data) => {
            this.setState({
                stockValue: data,
                lastValue: data
            })
        })
    }

    render() {
        return <h1>SBI Stock Data is {this.state.stockValue}</h1>
    }
}