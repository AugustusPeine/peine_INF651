//Variables and Data Types
let name = "John";
let age = 21;
let isStudent = true;

console.log(name + " is a", typeof name);
console.log(age + " is a", typeof age);
console.log(isStudent + " is a", typeof isStudent);

//Basic Arithmetic Operations
let num1 = 12;
let num2 = 15;

console.log("12 + 15:", num1 + num2);
console.log("12 - 15:", num1 - num2);
console.log("12 * 15:", num1 * num2);
console.log("12 / 15:", num1 / num2);

//Working with Strings
let sentence = "Hello World!";

console.log(sentence + " length:", sentence.length);
console.log(sentence + " first character:", sentence.charAt(0));
console.log(sentence + " last character:", sentence.charAt(sentence.length - 1));

//Math Object
let negNum = -4;

console.log(negNum + " square root is:", Math.sqrt(negNum));
console.log(negNum + " squared is:", Math.pow(negNum, 2));
console.log(negNum + " absolute value is:", Math.abs(negNum));

//Boolean Logic and Comparison Operators
let num3 = 5;
let num4 =7;

console.log("5 > 7:", num3 > num4);
console.log("5 < 7:", num3 < num4);
console.log("5 == 7:", num3 == num4);

//Logical Operators
let truthValue = true;
let falseValue = false;

console.log("True && False is:", truthValue && falseValue);
console.log("True || False is:", truthValue || falseValue);
console.log("!True is:", !truthValue);
console.log("!False is:", !falseValue);

//Using Template Literals
let firstName = "John";
let lastName = "Doe";

let greeting = `Hi Mr. ${firstName} ${lastName}!`;

console.log(greeting);