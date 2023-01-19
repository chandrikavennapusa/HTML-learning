function myfuntion(){
    let x =document.getElementById("ifname");
    x.value=x.value.toUpperCase();
}
function myfunction1(){
    document.getElementById("ifname").style.backgroundColor= "grey";
}

document.getElementById("ifname1").addEventListener("focus",()=>{document.getElementById("ifname1").style.backgroundColor="green"});
document.getElementById("ifname2").addEventListener("blur" ,()=>{document.getElementById("ifname2").style.color="yellow"});
document.getElementById("ifname3").addEventListener("mouseover",()=>{document.getElementById("ifname3").style.backgroundColor="green"});