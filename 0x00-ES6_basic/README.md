# ES6 Basics

This project is designed to provide an overview and practical examples of using modern JavaScript (ES6) features in frontend development.

## Overview

JavaScript ES6 (ECMAScript 2015) introduced many new features and syntax improvements that make coding in JavaScript more efficient and easier to read. This project covers various aspects of ES6, including variables, arrow functions, classes, modules, and more.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Resources](#resources)

## Introduction

JavaScript ES6, also known as ECMAScript 2015, brings a wide range of new features to the JavaScript language. These features enhance the language's capabilities and simplify complex coding patterns. This project aims to explore and demonstrate these features in the context of frontend development.

## Features

Some of the key features of JavaScript ES6 covered in this project include:

- **Let and Const**: Block-scoped variable declarations
- **Arrow Functions**: Concise syntax for writing functions
- **Template Literals**: Enhanced string interpolation
- **Destructuring**: Easy extraction of values from arrays and objects
- **Default Parameters**: Setting default values for function parameters
- **Rest and Spread Operators**: Handling arrays and objects with ease
- **Classes**: Simplified syntax for creating objects and inheritance
- **Modules**: Organizing code into reusable pieces
- **Promises**: Improved handling of asynchronous operations
- **Symbols and Iterators**: Advanced features for working with unique values and custom iterations

## Examples

Here are a few examples of ES6 features covered in this project:

### Let and Const

```javascript
let variable = 'I can be reassigned';
const constant = 'I cannot be reassigned';
```

### Arrow Functions

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

### Template Literals

```javascript
const name = 'World';
console.log(`Hello, ${name}!`); // Output: Hello, World!
```

### Destructuring

```javascript
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: John 30
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Resources

Read or watch:

- [ECMAScript 6 - ECMAScript 2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Demystifying ES6 Iterables & Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

### Key Topics Covered:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops
