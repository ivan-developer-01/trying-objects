const obj = {};

obj.a = 1;
obj.b = "b";
obj.c = true;
obj.d = [1, 2, 3];
obj.e = { a: 1, b: "b" };
obj.f = function () {
	console.log("Hello World");
};

delete obj.d;
