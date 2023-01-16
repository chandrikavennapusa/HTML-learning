var a=10;
console.log(a); //10
function add(){
    a=20;
    console.log(a); //20
}
add();
console.log(a); //20

let b=10;
console.log(b); //10
function add1(){
    
    b=30;
    console.log(b); //30
}
add1();
console.log(b); //30

const c=30;
console.log(c);  //30
/* 
function add2(){
        c=40;    //we can't assign constant variables.
        console.log(c);
}
add2();
console.log(c); */


var x=40;
console.log(x);  //40
function add3(){
    let z=50;
    console.log(z); //50
}
add3();
z=60; // it is consider to the new varible name on the outside .the global variable is consider.
console.log(z); 

var g=10;
var h=20;
i=g+h;
console.log(i);

/*
function carprogram(){
    let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
} 
carprogram() */
// document.getElementById("car").innerHTML=carName;



