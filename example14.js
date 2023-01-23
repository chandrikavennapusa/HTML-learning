
let d = document.createElement('h1');
d.innerText="this is a adding heading";

let x = document.getElementById("id1");
console.log(x);
x.append(d);
let y= document.getElementsByClassName("class1");
console.log(y);
let z =document.getElementsByTagName("h1");
console.log(z);
let a = document.querySelector(".lali1");
console.log(a);
let b=document.querySelectorAll("h1");
console.log(b);
let c =document.createElement('p');
c.innerText="this is third paragaraph";

var p = document.getElementById("id1");
p.appendChild(c);

var e =document.createElement('p');
e.innerText ="hello";
  

 var re = document.getElementById("id1");
 var last = document.getElementById("id2")
 re.insertBefore(e,last);
//  var f =document.getElementById("id2");
//     re.remove();
    //  re.removeChild(last);

     var la = document.getElementById("id2");
     la.replaceChildren(e);
    

     var x1 = document.getElementById("special");
     x1.style.color="pink";
     x1.style.border="2px solid black";
     x1.style.backgroundColor="green";


     x1.setAttribute('class','one');
     const myNodelist = document.querySelectorAll("p");
     document.getElementById("class2").innerHTML="all is well"+myNodelist.length;
      
     function validation(){
        let g =document.forms["myForm"]["fname"].value;
        if(g == ""){
            alert("name must be filled.")
        }
        return false;
     }

     function myMove() {
        let id = null;
        const elem = document.getElementById("id5");   
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.top = pos + "px"; 
            elem.style.left = pos + "px"; 
          }
        }
      }

      let j =document.querySelector('.grandparent');
      let k =document.querySelector('.parent');
      let l =document.querySelector('.mychild');
      j.addEventListener("click",function (){console.log("grandparent");})

      k.addEventListener("click" ,function(){console.log("parent");})
      l.addEventListener("click" , function(){console.log("mychild");});
     class stud {
        constructor(name){
        this.studname=name;
        }
        my1(){
            return "my name is "+this.studname ;
        }
        // my(m){
        //     return m+ " "+"my name is "+this.studname ;
        // }
        // static a1(n){
        //        return "hi" +n.studname;
        // }
     }
    //  newstud = new stud("venkat vir");
    //  document.getElementById("demo1").innerHTML= stud.a1(newstud);
    //  newstud1 = new stud("hari");
    //  document.getElementById("demo2").innerHTML=stud.a1(newstud1);
     
    //   class college extends stud{
    //     constructor(n,c){
    //         super(n);
    //         this.cname = c;
    //     }
    //    show(){
    //         return this.my1()+"it is a"+this.cname;
    //     }
    //   }
    //  let mys = new college("chand","yvu");
    //   document.getElementById("demo3").innerHTML=mys.show();

    class car{
            constructor(n){
                this.name=n;
            }
            get cna(){
                return this.name;
            }
            set cna(x){
                    this.carname=x;
            }
    }


 let mycar = new car("ford");
 document.getElementById("demo2").innerHTML=mycar.cna;

 function myteacher(){
    console.log("myteachername");
 }
 function myschool(){
    console.log("myschoolname");
 }
 module.export.myteacher=myteacher;



 var json = ' {"emplo":['+'{"fristname:jhon"},'+'{"secondname:kiran"},'+'{"thirdname:ubar"}]}';
 const onj = JSON.parse(json);
 