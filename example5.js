// function declaration

function say(name){
console.log("HELLO "+name);
}
say("NICO")
// function also have nested function 
function count(m,n){
    function howmuch(num)
    {
        return num*num;
    }
    return Math.sqrt(howmuch(m)+howmuch(n));
}
console.log(count(3,4));
// function expressions.

let area=function (radius){
    return Math.PI * radius * radius;
} ;
console.log(area(5));

function verify(name){
    function isjhon(){
        return name === "jhon";
    }
    if(isjhon()){
        console.log("yep,this is jhon");
    }
}
verify("jhon");

function counter() {
    var index = 0;
                         function increment() {
                               index = index + 1;
                              console.log(index);
                             return index;
                             }
                        return increment;
}

var userIncrement = counter();    // a reference to inner increment()
var adminIncrement = counter();   // a reference to inner increment()
adminIncrement();                 
 adminIncrement(); 
userIncrement();                  
userIncrement();
adminIncrement(); 


(function square(a){
    console.log(a*a);
}(8));


var laurel = { name: "Laurel" };

var welcome = function (guest) {
    console.log("I'm " + this.name + ", you're " + guest.name);
};

var stan = { name: "Stan" };


welcome.call(stan,laurel);    // => I'm Stan, you're Laurel
welcome.call(laurel, stan);    // => I'm Laurel, you're Stan

welcome.apply(stan, [laurel]); // => I'm Stan, you're Laurel
welcome.apply(laurel, [stan]); // => I'm Laurel, you're Stan 





























