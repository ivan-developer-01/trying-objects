let student = {
	city: "Delhi",
	age: -1
};

let studentJohn = Object.create(student);
studentJohn.name = "John";

console.log(student);
console.log(studentJohn);

console.log(studentJohn.city);

// Warning! Object.__proto__ is not recommended to be used.
console.log(studentJohn.__proto__);
