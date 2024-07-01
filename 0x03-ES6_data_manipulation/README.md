# ES6 Data Manipulation

Welcome to the ES6 Data Manipulation project! This project is designed to help you master various data manipulation techniques using ES6 features in JavaScript. Below, you will find essential information, learning objectives, and resources to guide you through this topic.

## Resources
Read or watch:
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

## Learning Objectives
By the end of this project, you should be able to explain and use the following concepts without the help of Google:

### How to Use `map`, `filter`, and `reduce` on Arrays
- `map`: Creates a new array with the results of calling a provided function on every element in the calling array.
  ```javascript
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled); // [2, 4, 6, 8]
  ```

- `filter`: Creates a new array with all elements that pass the test implemented by the provided function.
  ```javascript
  const numbers = [1, 2, 3, 4];
  const even = numbers.filter(num => num % 2 === 0);
  console.log(even); // [2, 4]
  ```

- `reduce`: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum); // 10
  ```

### Typed Arrays
Typed Arrays provide a mechanism for accessing raw binary data in JavaScript.
```javascript
let buffer = new ArrayBuffer(16);
let view = new Uint8Array(buffer);
view[0] = 255;
console.log(view[0]); // 255
```

### The Set, Map, and Weak Link Data Structures
- **Set**: A collection of unique values.
  ```javascript
  const set = new Set([1, 2, 3, 4, 4]);
  set.add(5);
  console.log(set.has(1)); // true
  console.log(set.size); // 5
  ```

- **Map**: A collection of keyed data items, similar to an object. However, keys can be of any type.
  ```javascript
  const map = new Map();
  map.set('name', 'John');
  map.set(42, 'The answer');
  console.log(map.get('name')); // John
  console.log(map.size); // 2
  ```

- **WeakMap**: Similar to Map, but keys must be objects and they are weakly referenced, meaning they can be garbage-collected.
  ```javascript
  let obj = {};
  const weakMap = new WeakMap();
  weakMap.set(obj, 'some value');
  console.log(weakMap.get(obj)); // some value
  ```

## Conclusion
Understanding ES6 data manipulation techniques is essential for writing efficient and maintainable JavaScript code. By mastering these concepts, you'll be able to handle data more effectively in your projects. Use the resources provided and practice the examples to solidify your knowledge.

