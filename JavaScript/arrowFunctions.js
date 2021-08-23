// Arrow Function...

function addData(a, b) {
    return a + b;
}

var addData = (a, b) =>  a + b;

function addComplex(a, b) {
    console.log(a);
    console.log( a + b )
    console.log(b)
    return a + b;
}

var addComplexArrow = (a, b) => {
    console.log(a);
    console.log( a + b )
    console.log(b)
    return a + b;
}

function noParam() {
    return Math.random()
}

var noParamArrow = () => Math.random();