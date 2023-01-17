var gender=prompt("enter the gender");
document.write("gender:"+ gender +"<br>");
var age =parseInt(prompt("enter the age:"))
document.write("age"+ age+"<br>");
if(gender=='male'){
    if(age>21){
        document.write("the age of the person is eligiable.")
    }
    else{
        document.write("the person is not eligible.")
    }

}
else{
   if(age>21){
    window.alert("the age of the person is eligible.")
   }
   else{
     window.alert("you are not eligible.")
   }
}

i=0;
while(i<5){
document.write("welcome!!!"+"<br>");
i++;
}

x=0
do{
    document.write("javascript!!!"+"<br>");
    x++;
}while(x<5);