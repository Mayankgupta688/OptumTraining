import { useState, useEffect } from "react";
import Axios from "axios";

export function DetailsHook() {

    useEffect(() => {
        debugger;
        Axios.get("http://localhost:8080/employees").then((response) => {
            setEmployeeList(response.data)
        });
    }, [])

    function deleteEmployeeDetails(event) {
        debugger;
        alert(`Request for Deletion.... ${event.target.id}`)
        Axios.delete(`http://localhost:8080/employees/${event.target.id}`).then(() => {
            alert("Employee Deletion Complete....");

            Axios.get("http://localhost:8080/employees").then((response) => {
                setEmployeeList(response.data)
            })
        })
    }

    function updateData(event) {
        setNewEmployee({
            ...newEmployee,
            [event.target.name]: event.target.value
        })
    }
    
    var [employeeList, setEmployeeList ] = useState([]);
    var [newEmployee, setNewEmployee ] = useState({
        userName: "Aniket",
        userId: "1000"
    });

    function addEmployee() {
        Axios.post("http://localhost:8080/employees", {
            name: newEmployee.userName,
            id: newEmployee.userId,
            avatar: "https://www.achievers.com/blog/wp-content/uploads/2020/05/05-27-20.jpg",
            createdAt: "Today"
        }).then(() => {
            Axios.get("http://localhost:8080/employees").then((response) => {
                setEmployeeList(response.data)
            })
        })
    }
    debugger;
    return (
        <div style={{"display": "inline"}}>
            { employeeList.map((employee) => {
                return (
                    <div className="card" style={{"width": "18rem", display: "inline-block", margin: "10px"}} key={employee.id}>
                        <img src={employee.avatar} className="card-img-top" alt={employee.name} />
                        <div className="card-body">
                            <h5 className="card-title">{employee.name}</h5>
                            <p className="card-text">{employee.id} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <input type="button" id={employee.id} href={employee.avatar} className="btn btn-primary" value="Delete" onClick={deleteEmployeeDetails}/>
                        </div>
                    </div>
                )
            })}<hr/><br/>

            <div>
                <b>Enter Name: </b><input name="userName" type="text" value={newEmployee.userName} onChange={updateData} /><br/><br/>
                <b>Enter Id: </b><input name="userId" type="text" value={newEmployee.userId} onChange={updateData} /><br/><br/>
                <input type="button"  value="Add Employee" onClick={addEmployee} />
            </div>
        </div>
    )
    


}