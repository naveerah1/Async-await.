//call back
function greeting(name, callback) {
    console.log('Hello ' + name);
    callback();
}
function logMessage() {
    console.log('This is a callback function');
}
greeting('Alice', logMessage);

//Exapmle2 callback with paremeters
// Define a function that takes a callback with parameters
function processUserInput(callback) {
    const name = prompt('Please enter your name.');
    callback(name);
}
function sayHello(name) {
    console.log('Hello, ' + name);
}
// Call the function and pass the callback
processUserInput(sayHello);

//Asynchronous callback
// Simulate a delay using setTimeout
function fetchData(callback) {
    console.log('Fetching data...');
    setTimeout(function() {
        const data = { id: 1, message: 'Hello World' };
        callback(data);
    }, 2000);
}
// Define a callback function
function displayData(data) {
    console.log('Data received:', data);
}
// Call the function and pass the callback
fetchData(displayData);

//Error handling with callback
// Function that takes a callback and an error callback
function fetchDataWithErrorHandling(callback, errorCallback) {
    setTimeout(function() {
        const error = false; // Change to true to simulate an error
        if (error) {
            errorCallback('Error fetching data');
        } else {
            const data = { id: 1, message: 'Hello World' };
            callback(data);
        }
    }, 2000);
}

// Define a callback function
function displayData(data) {
    console.log('Data received:', data);
}

// Define an error callback function
function handleError(error) {
    console.error('Error:', error);
}

// Call the function and pass the callbacks
fetchDataWithErrorHandling(displayData, handleError);
