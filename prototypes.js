let student = {
	city: "Delhi",
	age: -1
};

let studentJohn = Object.create(student);
studentJohn.name = "John";

console.log(student);
console.log(studentJohn);

console.log(studentJohn.city);

console.log(studentJohn.__proto__);