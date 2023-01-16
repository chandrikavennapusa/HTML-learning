function elementbyid(){
    document.getElementById("id1").innerHTML= "i'm changed." ;
}
function bulboff(){
    document.getElementById('mybulb').src='bulb.jpg';
}
function bulbon(){
    document.getElementById('mybulb').src='bulb1.jpg';
}
function changefontsize(){
    document.getElementById("change").style.fontSize="35px";
    document.getElementById("change").style.background="green";
}

function able(){
    document.getElementById('vis').style.visibility='hidden';
    document.getElementById('vis').style.background="green";
}


function able1(){
    document.getElementById('demo').style.display='none';
    document.getElementById('vis').style.background="red";
}

function checkwrite(){
    document.write('check')
}
function checkalert(){
    window.alert('hello !')
}
function checkprint(){
    print();
}