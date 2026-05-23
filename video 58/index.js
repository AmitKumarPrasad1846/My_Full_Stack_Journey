// JavaScript Functions
//function is used when wew want that a block sholud be used again and again. -- reusability.

//keyword - function.

function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

//function calling. also know as function invocation.
nice("amiku")

// sum function
function sum(a, b, c = 3) {  //c = 3 is a default value .
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c     //return keyword is used for returning a value from a function.
}


result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


// arrow function - 

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);