let a =/[asl]/;
document.write(a.test("fgrvf")); // atleast one word macth that time it is true.
let b =/\w/;
document.write("<br>");
document.write(b.test("weyew9")); // that represent [0-9],[a-z],[A-Z].
let c =/\d/;
document.write("<br>");
document.write(c.test("0")); // this reprsent a[0-9].
let d =/\bnv/;
document.write("<br>");
document.write(d.exec("bhfvnv")); // strating that letters are come that time only it is true. 
let e =/nv\b/;
document.write("<br>");
document.write(e.exec("bhfvnv")); //ending 
let f =/j+/
document.write("<br>");
document.write(f.exec("jjciei")); // one ore more times the letter coming.
let g =/k*/;
document.write("<br>");
document.write(g.test("hgeyk"));// zero or more times

let h =/l?/;
document.write("<br>");
document.write(h.test("vee")); // zero or one time.

let i =/[^asl]/;
document.write("<br>");
document.write(i.test("fgrvf")); // any one characte not between the brackets.
 let j=/klu{5}/;
 document.write("<br>");
 document.write(j.test("dhwdwdkluuuuu"));  // the number comes 5 times....
 //  {n, } macth at least n times .  {n,m} match from n to m times.







function simpleintrest(){
    let si,p,n,r;
    p=document.getElementById('principal').value;
    n= +time.value;
    r= +rate.value;
    si=(p*n*r)/100;
    result.value="Interest Amount :"+si;
  //  result.innerHTML="Interest Amount :&#8377;"+si;
}
function getResult()
		{
			let h,c,j,tot,avg;	//local vars
			h = +hm.value;
			c = +cm.value;
			j = +jm.value;
			tot=h+c+j;
			avg=tot/3;
			total.value="Total Marks :"+tot;
			average.value="Average :"+avg;
		}
        let x = +prompt("enter first number")
		let y = +prompt("enter second number")

		if( x>y )
			document.write("First number is Big");
		else if( y>x )
			document.write("Second number is Big");
		else
			document.write("both are same");




// function getResult()
// {
//     let h,c,j,tot,avg,grd;		//local vars
//     h = +hm.value;
//     c = +cm.value;
//     j = +jm.value;
//     tot=h+c+j;
//     avg=tot/3;
//     if(h>39 && c>39 && j>39)
//     {
//         if(avg>=90)
//             grd="A+";
//         else if(avg>=80)
//             grd="A";
//         else if(avg>=70)
//             grd="B+";
//         else if(avg>=60)
//             grd="B";
//         else if(avg>=50)
//             grd="C";
//         else
//             grd="D";
//     } else
//         grd="Fail";

//     total1.value="Total Marks :"+tot;
//     average2.value="Average :"+avg;
//     grade.value="Grade	:"+grd;
// }



