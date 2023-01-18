 function Person(name){
    this.name=name;
  // window.alert(this.name);
}
Person.prototype.sayHello = function(){
   
    console.log(`Hello, my name is ${this.name}.`);
}
 var per = new Person('jhon');
 per.sayHello();



 var rect={};
rect.width="50px";
rect.height="30px";
rect.res={red:250,green:500};
rect.tommy = function(){return 1;};
document.write(rect.width);
document.write(rect.height);
document.write(rect.tommy());
document.write(rect.res.green);




var rect ={red:100,green:300,blue:4000};
document.write("<br>");
document.write(rect["red"]);


var shape = {
    "bounding box width": 20,
    "bounding box height": 10,
    side1: 5,
    side2: 15,
    side3: 25,
    side4: 7,
    side5: 12
};
document.write("<br>");
document.write(shape["bounding box height"]);


for(let i=1;i<6;i++){
    var prop ="side"+i;
    document.write(prop  +" "+  shape[prop]);
}




for(var prop in shape){
document.write(prop+" "+shape[prop]);
}


var car = {
    make: "Toyota",
    model: "Camry",
    print: function () {
        console.log(this.make + " " + this.model);
    }
};
for(var prop in car){
    if(typeof car[prop] !== "function"){
            document.write(prop)
    }
}

var rad ={radius:"20"};
document.write(rad.radius);
document.write(delete rad.radius);
document.write(rad.radius);

var ramu ={red:2000};
ramu.green="300";
window.alert(ramu["green"]);

let message="javascript";
document.write("<br>");
let v=message.toUpperCase();
document.write(v);





