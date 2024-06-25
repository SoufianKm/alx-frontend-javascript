# ES6 Promises

## Overview
ES6 Promises provide a powerful way to handle asynchronous operations in JavaScript, making code more readable and easier to manage. Promises represent the eventual completion (or failure) of an asynchronous operation and allow chaining of operations using `.then()`, `.catch()`, and other methods. By understanding and leveraging Promises, developers can write cleaner, more efficient code for handling asynchronous tasks such as API calls, file reading, and more. This README covers essential concepts, methods, and usage patterns of ES6 Promises, as well as related async/await syntax for managing asynchronous code in a synchronous manner.

## Resources
Read or watch:
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

## Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- All of your functions must be exported

## Setup
### Install NodeJS 12.11.x
In your home directory:
```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` and run `npm install`.

## Promises
A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### How to Use Promises
Promises can be used to handle asynchronous operations. They provide a cleaner, more readable syntax and handle errors more effectively.

### `then`, `resolve`, `catch` Methods
- `then`: Invoked when the promise is fulfilled.
- `resolve`: Used to create a resolved promise.
- `catch`: Invoked when the promise is rejected.

### Promise Object Methods
- `Promise.all`: Waits for all promises to be resolved or any to be rejected.
- `Promise.race`: Waits for the first promise to be resolved or rejected.
- `Promise.resolve`: Returns a promise that is resolved with a given value.
- `Promise.reject`: Returns a promise that is rejected with a given reason.

## Throw / Try
- `try`: Block of code to test for errors.
- `throw`: Creates a custom error.
- `catch`: Block of code to handle errors.

## Await Operator
The `await` operator is used to wait for a Promise. It can only be used inside an async function.

## Async Function
An async function is a function declared with the `async` keyword. It allows the use of `await` within its body.

## Example
```js
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```
