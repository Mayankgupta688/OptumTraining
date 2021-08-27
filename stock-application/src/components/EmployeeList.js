import React from 'react';
import Axios from "axios"
import { EmployeeInfo } from "./EmployeeInfo";

// 1. Creation of a class
// 2. To Identify Class as Component
export default class EmployeeList extends React.Component {
    
    constructor() {
        super();
        this.state = {
            empList: [],
            counter: 0,
            userName: "TechnoFunnel",
            userId: "100"
        }
    }

    componentDidCatch() {
        console.log("Error Received...");
    }

    static getDerivedStateFromError(error) {
        return  {
            hasError: true
        }
    }

    deleteEmployeeDetails = (event) => {
        alert(`Request for Deletion.... ${event.target.id}`)
        Axios.delete(`http://localhost:8080/employees/${event.target.id}`).then(() => {
            alert("Employee Deletion Complete....");

            Axios.get("http://localhost:8080/employees").then((response) => {
                this.setState({
                    empList: response.data
                });
            })
        })
    }

    updateCounter = () => {
        this.setState({
            ...this.state,
            counter: this.state.counter + 1
        })
    }

    addEmployee = () => {
        Axios.post("http://localhost:8080/employees", {
            name: this.state.userName,
            id: this.state.userId,
            avatar: "https://www.achievers.com/blog/wp-content/uploads/2020/05/05-27-20.jpg",
            createdAt: "Today"
        }).then(() => {
            Axios.get("http://localhost:8080/employees").then((response) => {
                this.setState({
                    empList: response.data
                });
            })
        })
    }

    updateName = (event) => {
        this.setState({
            ...this.state,
            userName: event.target.value
        })
    }

    updateId = (event) => {
        this.setState({
            ...this.state,
            userId: event.target.value
        })
    }

    updateData = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>

                { this.state.hasError === true && (
                    <div>
                        <h1>Error Retrieving Data</h1>
                    </div>
                )}

                <h1>Here is the Employee List: {this.state.empList.length}</h1>
                <h2>Initial Counter: {this.state.counter}</h2>
                <input type="button" value="Update Counter" onClick={this.updateCounter} /><br/><hr/><br/>
                <div style={{"display": "inline"}}>

                    { this.state.empList.map((employee) => {
                        return (
                            <EmployeeInfo 
                                employee={employee} 
                                counter={this.state.counter}
                                deleteEmployeeDetails={this.deleteEmployeeDetails}
                            ></EmployeeInfo>
                        )
                    })}<br/><br/>
                </div>
                <hr/>
                <div>
                    <b>Enter Name: </b><input name="userName" type="text" value={this.state.userName} onChange={this.updateData} /><br/><br/>
                    <b>Enter Id: </b><input name="userId" type="text" value={this.state.userId} onChange={this.updateData} /><br/><br/>
                    <input type="button" onClick={this.addEmployee} value="Add Employee" />
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        // alert("Component Updated......")
    }

    componentDidMount() {
        Axios.get("http://localhost:8000/employees").then((response) => {
            this.setState({
                empList: response.data
            });
        }, (err) => {
            throw new Error("Application Data Failed");
        })
    }
}