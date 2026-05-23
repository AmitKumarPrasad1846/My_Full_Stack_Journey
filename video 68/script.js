console.log("Harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 

/* 
--> Use this code for selecting elements with class name.
document.getElementsByClassName("Class_name")

--> Use this code for selecting elements with class name.
document.getElementById("redBox")

--> For performing any particular action on any particular id or class use the following command. (i.e. querySelector("___"))
document.querySelector(.box) #--> This will perform any desired operation on the first element which has following command.

--> We can use this following code for getting all the particular class or id as a collection(i.e. use querySelectorAll(".box"))
document.querySelectorAll(".box")

--> And for applying any desired operation on the above collection which have created we use:-
"loops concept"
document.querySelectorAll(".box").forEach(e =>{e.style.backgroundColor = "Red"});
*/
