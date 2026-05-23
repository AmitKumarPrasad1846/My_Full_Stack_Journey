// Javascript strings code with harry sigma web Development #video 60

console.log("This is strings tutorial")

//string is immutable --- once it is made then we can't change it.
let a = "Ratan";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

/* 
Escape Sequence characters are as follows:
1. \n --> Newline character
2. \t --> Tab character
3. \r --> carriage return 

let name = 'Adam D'Angelo' --> this makes the JavaScript confuse about which apastrophee should be used.

So in such case we introduce backslash ---> \
the backslash makes the JavaScript to jump by one character.
so we wirte 'Angelo D'Angelo' as 'Angelo D\'Angelo'
*/

let real_name = "Harry"
let friend = "Rohan"

//this is concatenation. (old JavaScript method)
console.log("His name is " + real_name + " and his friends name is " + friend)

//this is interpolation (introduced inside ES6) -- modern JavaScript.
//Interpolation is doen using the template literals i.e. `  ` and ${ }
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"

// for running functions we use parenthesis. 

// toUpperCase() --> makes all the character in uppercase. 
console.log(b.toUpperCase())
// toLowercase() --> makes all the character in lowercase.s
console.log(b.toLowerCase())

// for running the characters we only place letter 
//length counts the number of character inside a particular string.
console.log(b.length)

// slicing - It gives only the required character inside a string.
console.log(b.slice(1, 5))
console.log(b.slice(1))

//replace --- using replace we can change particular characters inside a string.
console.log(b.replace("Sh", "77"))
//concat --- using concat we can join any no of characters inside a string.
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)


// there are many more functions such as b.charAt() , b.indexOf() EventCounts. inside a Javascript.
