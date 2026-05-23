// ECMAScript is a Standard on which JavaScript is Based. 
// ECMAScript helps the developers of JavaScript to manage the JavaScript. 

console.log("Hey this is Amit Kumar Prasad")

// making a variable.

// javascript is case sensitive.

// let is block scoped.
let a = 5; //here 5 is a literal(fixed value).
// a = a + 1;
let b = 6;
let c = "Amit";
let _a = "Harry";
// var 55a = "Rohan"; Not allowed because a name can't start with a number. 

// console.log(a + b + 8)
// now printing the types of CharacterData. a, b, c 
// console.log(typeof a, typeof b, typeof c)

// block scoped.
{
    let a = 66;
    console.log(a)
}

// const a1 = 6; this is unchangeable.
// a1 = a1 + 1; this is not allowed because a1 is constant.

// there are seven datatypes in javascript.
// 1.Null
// 2.Number
// 3.String
// 4.Symbol
// 5.Undefined
// 6.Boolean
// 7.Big Int

// there is a process in javascript which tells us which process is wrong and we have used the same name twice known as "linting".
let x = "Harry Bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o = {
    name:"Harry", //we can write name as - "name" to make the value consistent (otherwise name is also fine.)
    "jobe code": 5600,
    is_handsome: true //added here a boolean value.
}

// key value pairs in javascript.
console.log(o)
o.salary = "100crores" //changing or adding the values.
console.log(o)
o.salary = "500crores"