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


switch(new Date().getDay()){
    case 0:      day="sunday";break;
    case 1 :      day="monday";break;
    case 2:       day="tuesday";break;
    case 3:       day="wednesday"; break;
    case 4:      day="tursday";break;
    case 5:     day="friday";break;
    case 6:     day="saturday";break;
   
}
document.write("Today is " + day);
document.write("<br>")

let w = "0";
switch (w) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
document.write(text);

