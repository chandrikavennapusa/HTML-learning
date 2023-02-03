function addbook1(){
    document.querySelector(".formdetails").style.display = "block";
}
 let add=[];
function addbook2(){
    
    var addbook =
    {
        book_id:document.getElementById("bookid").value,
        book_name:document.getElementById("bookname").value,
        book_author:document.getElementById("author").value,
        book_category:document.getElementById("category").value,
        book_price:document.getElementById("price").value,
        book_status:document.getElementById("Radio").value,
     
 }
localStorage.setItem(addbook.book_id,JSON.stringify(addbook));

add=JSON.parse(localStorage.getItem("addbook.book_id"));

var  tr = document.createElement('tr');
 var tbody = document.createElement('tbody');
 tr.appendChild(document.createElement('td')).innerHTML = add.book_id;
 tr.appendChild(document.createElement('td')).innerHTML = add.book_name;
 tr.appendChild(document.createElement('td')).innerHTML = add.book_author;
 tr.appendChild(document.createElement('td')).innerHTML = add.book_category;
 tr.appendChild(document.createElement('td')).innerHTML = add.book_price;
 tr.appendChild(document.createElement('td')).innerHTML = add.book_status;
 tbody.appendChild(tr);
document.getElementById("book1").appendChild(tbody);

}


function clearfield(){
    document.getElementById("bookid").value = "";
    document.getElementById("bookname").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value="";   
    document.getElementById("CheckBox").value = "";
    document.getElementById("price").value = "";
    document.getElementById("Radio").value = "";
}