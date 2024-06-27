# ES6 Classes

Welcome to the ES6 Classes project! This project aims to help you understand and effectively use ES6 classes in JavaScript. Below, you'll find essential information, learning objectives, and resources to guide you through this topic.

## Resources
Read or watch:
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)

### How to Define a Class
Defining a class in ES6 is straightforward using the `class` keyword. Here’s a basic example:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
```

### How to Add Methods to a Class
Methods can be added to a class by simply defining them within the class body. For instance, in the `Animal` class above, the `speak` method is an example of an instance method.

### Why and How to Add a Static Method to a Class
Static methods are called on the class itself, not on instances of the class. They are often used for utility functions.
```javascript
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(2, 3)); // 5
```

### How to Extend a Class from Another
Classes can be extended using the `extends` keyword. This allows the new class to inherit properties and methods from the existing class.
```javascript
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

### Metaprogramming and Symbols
Metaprogramming in JavaScript refers to the ability to manipulate the structure and behavior of programs. Symbols are a primitive data type introduced in ES6 that can be used as unique property keys.

Here’s an example using symbols:
```javascript
const sym = Symbol('description');
class Cat {
  constructor(name) {
    this.name = name;
    this[sym] = 'Private property';
  }
  
  getSecret() {
    return this[sym];
  }
}

let cat = new Cat('Whiskers');
console.log(cat.getSecret()); // Private property
```

Metaprogramming can also involve using proxies and the Reflect API to customize the behavior of objects.

## Conclusion
Understanding ES6 classes is crucial for writing modern JavaScript. By mastering these concepts, you'll be able to create more structured and maintainable code. Use the resources provided and practice the examples to solidify your knowledge.
