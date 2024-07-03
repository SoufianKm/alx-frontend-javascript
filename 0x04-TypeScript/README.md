# TypeScript

## Resources
Read or watch:
- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- Basic types in TypeScript
- Interfaces, Classes, and functions
- How to work with the DOM and TypeScript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with TypeScript

## Overview
TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, and interfaces to JavaScript, enabling developers to catch errors early and write more maintainable code. TypeScript can be used to develop large-scale applications with a better structure and improved tooling.

## Basic Types in TypeScript
TypeScript provides several basic types that enhance the core JavaScript types, ensuring better type safety and clarity:
- `boolean`
- `number`
- `string`
- `array`
- `tuple`
- `enum`
- `any`
- `void`
- `null` and `undefined`
- `never`
- `object`

## Interfaces, Classes, and Functions
### Interfaces
Interfaces define the shape of an object, allowing TypeScript to type-check against these shapes.
```typescript
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'John Doe',
  age: 30
};
```

### Classes
Classes provide a way to define object blueprints, encapsulating data and behavior.
```typescript
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

const greeter = new Greeter('world');
console.log(greeter.greet());
```

### Functions
Functions can have typed parameters and return types.
```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3));
```

## Working with the DOM and TypeScript
TypeScript can be used to interact with the DOM, providing type safety for common DOM operations.
```typescript
const button = document.querySelector('button');

button?.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

## Generic Types
Generics provide a way to create reusable components that can work with a variety of types.
```typescript
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity<string>('hello');
```

## Using Namespaces
Namespaces provide a way to organize code into logical groups, preventing global scope pollution.
```typescript
namespace Utility {
  export function log(message: string) {
    console.log(message);
  }
}

Utility.log('This is a message');
```

## Merging Declarations
TypeScript allows merging multiple declarations into a single one, enhancing flexibility.
```typescript
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

const box: Box = { height: 5, width: 6, scale: 10 };
```

## Using an Ambient Namespace to Import an External Library
Ambient namespaces allow you to type-check code that interacts with external libraries.
```typescript
declare namespace $ {
  export function ajax(settings: any): void;
}

$.ajax({ url: 'https://example.com', method: 'GET' });
```

## Basic Nominal Typing with TypeScript
Nominal typing ensures that different types are not interchangeable, even if they have the same structure.
```typescript
type ID = { __brand: 'ID' } & string;
type Name = { __brand: 'Name' } & string;

const userID: ID = 'user123' as ID;
const userName: Name = 'John Doe' as Name;

function getUser(id: ID) {
  // ...
}

getUser(userID); // OK
getUser(userName); // Error
```

## Conclusion
This README provides a comprehensive overview of TypeScript, covering basic types, interfaces, classes, functions, DOM manipulation, generic types, namespaces, declaration merging, ambient namespaces, and nominal typing. By mastering these concepts, you can leverage TypeScript to write safer, more maintainable JavaScript code.
