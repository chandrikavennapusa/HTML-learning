var students =["raju","ramu","rana","ravana","reha"];
students.unshift("monkey");//frist element is add.
students.unshift("pig");
students.unshift("donkey");

students.shift();//frist element remove.
for (const x of students){
    document.write(x +"<br>");
} // array literal.
document.write(students.length+"<br>")
document.write(students.indexOf("ravana")+"<br>");  

var stude = new Array();
stude[0]="bhavan";
stude[1]="bhavana";
stude[2]="bhavani";
stude[3]="bhavitha";
stude.push('mahar');//adding th elemnt
stude.push("kamal");
stude.pop();
stude.splice(1,2,"namskar","bye");
for(const y of stude){
    document.write(y+"<br>");
   
}//using direct array
document.write(stude.length);

// for(const z of stu){
//     document.write(z);//using array construtor
// }


var stu =new Array("kavi","kalayn","kala");
var covertarray=[];
Array.prototype.myucase=function(){
     for(var  i of stu){
         i = i.toUpperCase();
         covertarray.push(i);
         
     }
     
};

stu.myucase();
document.write (covertarray);

function fun(l){
   return  l*5;
}

var arr =["1","2","3","4"];
 var op =arr.map(fun);
 document.write(op);