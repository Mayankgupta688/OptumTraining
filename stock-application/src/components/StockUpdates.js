import React from 'react';
import Axios from "axios";

export default class StockUpdates extends React.Component {
    constructor() {
        super();
        this.state = {
            stockValue: [
                { stockName: "SBI", url: "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI", payload: {}},
                { stockName: "NALCO", url: "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC", payload: {}},
                { stockName: "IDEA", url: "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/IC8", payload: {}},
                { stockName: "AIRTEL", url: "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/BTV", payload: {}}
            ]
        }

        setInterval(() => {
            this.getData();
        }, 2000)
        
    }

    getData = () => {
        for(let i = 0; i< 4; i++) {
            Axios.get(this.state.stockValue[i].url).then((response) => {
                var inputData = response.data.data;

                var filteredStocks = this.state.stockValue.map((value) => {
                    if(value.stockName === this.state.stockValue[i].stockName) {
                        value.payload = inputData
                    }
                    return value
                })
                this.setState({
                    stockValue: [
                        ...filteredStocks
                    ]
                })
            })
        }
    }

    render() {
        return (
            <div className="accordion" id="accordionExample">
                { this.state.stockValue.map((stock) => {
                    return (
                        <div className="accordion-item" key={stock.stockName}>
                            <h2 className="accordion-header" id={stock.stockName}>
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'heading_' + stock.stockName} aria-expanded="true" aria-controls="collapseOne">
                                    Stock Value for {stock.stockName}
                                </button>
                            </h2>
                            <div id={'heading_' + stock.stockName} className="accordion-collapse collapse show" aria-labelledby={stock.stockName} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <h2>Price Percent Change: {stock.payload.pricecurrent}</h2>
                                    <h3>Price Percent Change: {stock.payload.pricechange}</h3>
                                    <h3>Price Percent Change: {stock.payload.pricepercentchange}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}