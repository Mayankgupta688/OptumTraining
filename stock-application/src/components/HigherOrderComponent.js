import React from 'react';

function ShowName() {
    return <h2>User Name is "Mayank Gupta"</h2>
}

function ShowAge() {
    return <h2>User Age is 10</h2>
}

function ShowDesignation() {
    return <h2>User Designation is "Trainer"</h2>
}

function ShowSalary() {
    return <h2>User Salary is 100</h2>
}

// Function that can take a component as input and return a component


function higherOrderFunction(UserComponent, OtherComponent) {
    return function() {
        return (
            <div>
                <h1>The USer Details are given Below</h1>
                <UserComponent></UserComponent>
                <OtherComponent></OtherComponent>
            </div>
        )
    }
}

export var NameComponent = higherOrderFunction(ShowName, ShowAge);
export var AgeComponent = higherOrderFunction(ShowAge, ShowDesignation);
export var DesignationComponent = higherOrderFunction(ShowDesignation, ShowSalary);
export var SalaryComponent = higherOrderFunction(ShowSalary, ShowName);
