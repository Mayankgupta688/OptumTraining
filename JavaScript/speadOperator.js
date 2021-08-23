// Spread Operator....

var employeeDetails = {
    name: "Mayank",
    age: 33,
    designation: "Developer"
}


var newEmployee = {
   ...employeeDetails
}

employeeDetails.name = "Anshul";

console.log(newEmployee.name)

newEmployee.name = "TechnoFunnel";

console.log(employeeDetails.name)