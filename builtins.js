const obj = {};

console.log(obj.__proto__);

const str = "str";

console.log(str.__proto__);

// while executing
// str.toUpperCase(), it will call
// new String()
console.log(str.toUpperCase());