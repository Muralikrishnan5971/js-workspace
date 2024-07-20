let alertStatus = 'displayAlert';
// if (alertStatus == 'displayAlert') alert('JS is Fundamentals!!! ');

const num = 43 + 3 + 12 - 27 / 12 * 2
console.log(num)

console.log('murali')

let firstName = 'Muralikrishnan'
console.log(firstName)

// let 4ye = 'name'

// allowed symbols in js namming conventions
let first_name = 'Naruto';
let $lastname = 'Uzumaki';

// We should not start a variable name in UPPER CASE letter.

let Human = 'Kakshi'; // Now its convention, but not illegal.

let PI = 3.14; // CONSTANT

/*

In JS, every value is either a object or a primitive value

OBEJCT:
let m = {
	name: 'murali'
};

PRIMITIVE VALUE:
let name = 'murali';

A value is ONLY primitive, when its not an object.

There are 7 primitive data types in JS.

--> number (decimal and integers)
represents both Interger and Floating point.
In JS, all numbers are of type number

--> string
--> boolean
--> undefined
It is the value taken by the variable, that is yet to be defined.
** Whenever we declare a empty variable,
the value of the variable will be undefined,
And the type of the variable will also be undefined.
--> null
--> symbol (ES 2015)
--> bigint (ES 2020)
*/

let no = 43.0
console.log(no)

let movie = 'jigarthanda'

let isFlop = false

let collection;
console.log(collection)

let fruit = null
console.log(typeof fruit)
/*
null is very much similar to undefined as it is null as a value
and as a data type.

But if we run typepf null, it returns object, which is
a bug in Java script. It is not fixed due to legacy reasons.

*/

let tooLarge = 234234234242342334234234234

/*
JS automatically determines the data type of the value when it is
stored into a variable. This distiction between value and variable is
important in JS.

IN JS, ITS THE VALUE THAT HAS A TYPE AND NOT THE VARIABLE.

*/

console.log(typeof tooLarge)
console.log(typeof collection)

/*
There are three different ways to declare a variable in js.
let and const are more modern way introduced in ES6.

we completely avoid using var keyword for legacy reasons.

And actually we dont have to declare variables, but that is a bad practice.
Because it does'nt create a variable in the so called scope.
Instead JS will create a property on the global object.
*/

film = 'Oppenheimer'
console.log(film + 'is awesome!!')
console.log(typeof film)

// OPERATORS
const currentYear = 2023;
const myAge = currentYear - 1995;
const first_Name = 'Murali'
const last_Name = 'Krishnan'

console.log(myAge)

console.log(myAge * 2, myAge / 2, 2 ** 3);

console.log(first_Name + ' ' + last_Name)
// there is actually a better way of doing string concatenation
// which is called template strings

// Assignment Operators
let ans = 10 + 14;
ans++
ans *= 4
ans--
console.log(ans)

console.log(currentYear > 1995)

let isEligible = myAge >= 18;
console.log(isEligible)

// Refer MDN documentation for anything JS

let x, y;
x = y = 10 + 40 - 25
console.log(x, y)

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark ** 2);
console.log(BMIMark)

let BMIJohn = massJohn / (heightJohn ** 2);
console.log(BMIJohn)

// Strings and template literals

const line = "I'm running " + firstName + " my name is " + (currentYear - 1995) + " years old!"
console.log(line)

// we need to use the backtick symbol for template strings
const newName = `My name is ${firstName}, ${currentYear - 1995} years old!`
console.log(newName)

// we can also backticks for any regular strings
console.log(`Just a regular string`)
// much easier than single qoute and double qoutes representation.

// Mutli line string without the template literal
console.log('string \n\
on multiple line \n\
this is a third line')
// same thing can be done in a simpler way using template literal

console.log(`string
on multiple line ${firstName}
this is a third line`)


console.log("This is the last line in this script")
console.log("This is the last line in this script")
