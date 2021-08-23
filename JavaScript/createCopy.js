// Spread Operator....

var employeeDetails = {
    name: "Mayank",
    age: 33,
    designation: "Developer"
}

// Way One...
var newEmployee = {
   name: employeeDetails.name,
   age: employeeDetails.age,
   designation: employeeDetails.designation
}

employeeDetails.name = "Anshul";

console.log(newEmployee.name)

var newEmployee = employeeDetails;

// Way Three
var newEmployee = {};
newEmployee.name = employeeDetails.name;
newEmployee.age = employeeDetails.age;
newEmployee.designation = employeeDetails.designation;


var newEmployee= {name: "Mayank", age: 33,designation: "Developer"}


var newEmployee= {
    ...employeeDetails
}