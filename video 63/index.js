let arr = [1, 2, 4, 5, 7]
//index    0, 1, 2, 3, 4

console.log(arr);
console.log(arr.length)

// strings are immutable.
let x = "Amit"
x[0] = 22

// arrays are mutable.
arr[0] = 5666
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

// type of array is : object 
console.log(typeof(arr))

//Property of array
a = [1, 2, 3, 4, 5, 6, 7, 8]

a.pop() // Output : It take out last element from the array. i.e. 8

a.push("Amit") // It adds a value inside the array.
a.push("100") // Output  : It will add 100 inside the array.

// var.shift() pop ka bhai hota hai.
// var.unshift() push ka bhai hota hai.

a.shift() // it will take out starting element from the element from the array.

a.unshift("Amit_Kumar") // It will insert at start position of the element.

// here comes "delete" element which deletes the specific indexed value and make the place a null value.

// Which means that the deleted place have been allocated memory but it is undefined.

delete a[6] // it will delete the 6th indexed value and make that place null element from the string.

// Concatenation of arrays inside the javascript.
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]

a1.concat(a2, a3)  // Output: Returns [1, 2, 3, 4, 5, 6, 7, 8, 9]