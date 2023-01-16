// addition 
function add(){
    let a=10;
    let b=20;
    c=a+b;
    console.log("addition"+ " " +c);
}
add();

function mod(){
    let a=10;
    let b=20;
    c=a%b;
    console.log("modulo"+ " " +c);
}
mod();

function increment(){
    let a=10;
    c=a++;
    b=++a;
    console.log("increment"+ " " +c);
    console.log("increment"+ " " +b);
}
increment();

function dec(){
    let a=10;
    b=a--;
    document.write(b +" decrement");
}
dec();