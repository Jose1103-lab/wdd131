// first example
function calculate(a, b, callback) {
    callback(a + b) // with this we pass the attribs to the callback function
}
function logResult(result) { //we declare the function to take an operation directly
    console.log(`this is the result ${result}`)
}
// second example
function fetchData(callback) {
    setTimeout(() => {
        callback('Data has been fetched');
    }, 2000);
}
function processData(data) {
    console.log(`this is the data ${data}`);
}

// first
calculate(1, 2, logResult)
// second
fetchData(processData);

// working with the local storage ------------------------------------
const myFirstLocal = document.querySelector("#visit");
let numberOfVisits =  Number(window.localStorage.getItem("numberOfVisits"));// here im creating/accessing the local storage

if (isNaN(numberOfVisits)) { // if the value is not a number
    numberOfVisits = 0;
}

numberOfVisits++;
localStorage.setItem("numberOfVisits", numberOfVisits); //save a value in the local storage
myFirstLocal.innerHTML = numberOfVisits;






