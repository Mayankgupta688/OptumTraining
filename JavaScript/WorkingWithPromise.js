// Entity One
var myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Not Fulfilled");
    }, 5000)

    setTimeout(() => {
        resolve("I am goind to resolve what I said");
    }, 15000)
})



// Entity Two
myPromise.then((success) => {
    console.log("Promise is Resolved");
    console.log(success);
}, (failure) => {
    console.log(failure)
    console.log("Promise is Reject")
})


for(let i = 0; i< 10; i++) {
    console.log(i)
}