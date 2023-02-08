var local_data = JSON.parse(localStorage.getItem("book store")) || [];
        console.log(local_data);
                if(local_data.length == 0){
                       document.getElementById("nobooks").style.display="block";
                }

       const bookscolle =(id, price) => {
            const book = document.createElement("div");
            book.style.width = "200px";
            book.style.height = "250px";
            book.style.margin = "20px";
            book.style.border = "2px solid gray";
            book.style.display = "inline-block";
            book.style.textAlign = "center"; 
            const bookImage = document.createElement("img");
            bookImage.src="biology.jpg";
            bookImage.style.width = "100%";
             bookImage.style.height = "200px";
             const bookstorageId =document.createElement("div");
             bookstorageId.innerHTML = "Book ID :"+ id ;
             const bookstorageprice = document.createElement("div");
             bookstorageprice.innerHTML = "Price :"+ price ;
                book.appendChild(bookImage);
                book.appendChild(bookstorageId);
                book.appendChild(bookstorageprice);
                bookcolle.appendChild(book);
        }
        const bookcolle = document.getElementById("bookarrangment");
local_data.forEach(data => {
    bookscolle(data.book_id , data.book_price);
    console.log(local_data);
})






