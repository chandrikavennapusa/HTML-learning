var a= parseInt(prompt("enter the first value:"));
var b= parseFloat(prompt("enter the second value:"));

function product(p1,p2){
    return p1 * p2 ;
}
 window.alert(product(a , b)); 

 var f =parseFloat(prompt("enter the fernheit:"));
 function celisis(f1){
    return (5/9)*(f1-32);
 }
 document.getElementById("demo2").innerHTML = celisis(44);
 
 function test(){
    let car ="vivo"
    return car ;
 }

 var x = test();
 document.getElementById("demo3").innerHTML = x; 


 var person = {fN:"jhon",lN:"khan" ,age:25, k:function a (){ return this.fN }};
 document.getElementById("demo4").innerHTML = person.k();

 var u= parseInt(prompt("enter the u value:"));
 var v= parseFloat(prompt("enter the v value:"));

 var car = function carid(){return u*v};
 console.log(car(u,v));

 const g = new Function("a","b" ,"return a*b")
    let c =g(a,b)*2;
    window.alert(c);


    (function(){
        let v = "self-invoking function" ;
        document.write(v);
    })();