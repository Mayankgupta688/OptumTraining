import React from 'react';

export class EmployeeInfo extends React.Component {
    render() {
        return (
            <div className="card" style={{"width": "18rem", display: "inline-block", margin: "10px"}} key={this.props.employee.id}>
                <img src={this.props.employee.avatar} className="card-img-top" alt={this.props.employee.name} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.employee.name}</h5>
                    <p className="card-text">{this.props.employee.id} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <input type="button" 
                        id={this.props.employee.id} 
                        href={this.props.employee.avatar} 
                        className="btn btn-primary" 
                        value="Delete" 
                        onClick={this.props.deleteEmployeeDetails} 
                    />
                </div>
            </div>
        )
    }
}

export function EmployeeInfoFunction(props) {
    return (
        <div className="card" style={{"width": "18rem", display: "inline-block", margin: "10px"}} key={props.employee.id}>
            <img src={props.employee.avatar} className="card-img-top" alt={props.employee.name} />
            <div className="card-body">
                <h5 className="card-title">{props.employee.name}</h5>
                <p className="card-text">{props.employee.id} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <input type="button" href={props.employee.avatar} className="btn btn-primary" value="Delete" onClick={props.deleteEmployeeDetails} />
            </div>
        </div>
    )
}