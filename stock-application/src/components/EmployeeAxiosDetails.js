import React from 'react';
import Axios from "axios";

export default class EmployeeAxiosDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeDetails: [],
            name: "Mayank Gupta",
            age: 12
        }

        Axios.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            debugger;
            this.setState({
                ...this.state,
                employeeDetails: response.data
            })
        })
    }

    deleteEmployee = (event) => {
        alert(`Employee Id to be deleted is: ${event.target.id}`)
        var filteredData = this.state.employeeDetails.filter(emp => +emp.id !== +event.target.id)
        this.setState({
            ...this.state,
            employeeDetails: filteredData
        })
    }

    addEmployee = () => {
        var newEmployee = {
            name: "Anshul Gupta",
            id: 7,
            createdAt: "Now",
            avatar: "https://www.achievers.com/blog/wp-content/uploads/2020/05/05-27-20.jpg"
        }

        this.setState({
            ...this.state,
            employeeDetails: [...this.state.employeeDetails, newEmployee]
        })
    }

    render() {
        return (
            <div style={{"display": "inline"}}>
                { this.state.employeeDetails.map((employee) => {
                    return (
                        <div className="card" style={{"width": "18rem", display: "inline-block", margin: "10px"}} key={employee.id}>
                            <img src={employee.avatar} className="card-img-top" alt={employee.name} />
                            <div className="card-body">
                                <h5 className="card-title">{employee.name}</h5>
                                <p className="card-text">{employee.id} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                                <input type="button" 
                                    className="btn btn-primary" 
                                    value={`Delete ` +  employee.name}
                                    id={employee.id} 
                                    onClick={this.deleteEmployee} />
                            </div>
                        </div>
                    )
                })}<br/><br/>

                <input type="button" value="Add Employee" onClick={this.addEmployee} />
            </div>
        )
    }
}