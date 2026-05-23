let a5 = [1, 93, 5, 6, 88];

// Traditional for loop
for (let index = 0; index < a5.length; index++) {
    const element = a5[index];
    console.log(element);
}

// forEach method
a5.forEach((value, index, arr) => {
    console.log(value, index, arr);
});


let obj = {
    a: 1,
    b: 2,
    c: 3
};

// for in loop
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

// for of loop
for (const value of a5) {
    console.log(value)
}

// For each method.
a5.forEach((value, index, a5)=>{
    console.log(value, index, a5)
})

// for of loop
for (const element of a5) {
    console.log(element)
}
