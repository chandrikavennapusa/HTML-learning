var arr =[10,23,15,45];
 window.alert(arr.sort((a, b) => a - b));  // acesnding oreder.

 var arr1 =[12,34,78,45,77,99];
 document.write(arr1.sort((a, b) => b - a));
 document.write("<br>");
document.write(Math.min.apply(null,arr1));
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
document.write(cars.sort((a, b) => a.year - b.year) ) ;

var now =new Date("2021-03-25");
document.write(now);
document.write("<br>");
document.write(now.toDateString());
document.write("<br>");
document.write(now.getDate());
document.write("<br>");
document.write(now.getFullYear());
document.write("<br>");
document.write(now.getMonth());
document.write("<br>");
document.write(now.getDay());
document.write("<br>");
document.write(now.getMinutes());
document.write("<br>");
document.write(now.getSeconds());
document.write("<br>");
document.write(now.getMilliseconds());
document.write("<br>");
document.write(now.getHours());
document.write("<br>");
var now1 = new Date();
    var a =now1.setDate(15);
    document.write(a);
    document.write("<br>");
    var b = now1.setFullYear(1999)
    document.write(b);
    document.write("<br>");
    var c=  now1.setMinutes(30);
    document.write(c);
