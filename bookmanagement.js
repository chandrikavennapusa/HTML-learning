function addbook1(){                                                                            // addbook click button
    document.querySelector(".formdetails").style.display = "block";
    document.querySelector("#nobooks").style.display="none";
}

var book_list=[];

var local_data = JSON.parse(localStorage.getItem("book store"));

if(local_data !== null ){
	if(local_data.length > 0){
		for( let data of local_data){
			book_list.push(data);
			}
	}
}

function bookidvalidation(value){                                                    //duplicate book id is  not allowed.
    if( isDublicate(value)){
        document.querySelector(".formdetails").style.display = "none";
        document.getElementById("save").disabled=true;
        document.getElementById("isdup").style.display='block'
        document.addEventListener('click',clearfield())
    }
}
 
function  isDublicate(bookid){
    let duplicate = false;
    if(book_list.length>0){
        for(let book of book_list){
            if(book.book_id === bookid){
                duplicate=true;
                break;
            }
        }
    }
    return duplicate;
}

function formsaving(){                                                                    // saving the form.
    let id=document.getElementById("bookid").value;
    let name = document.getElementById("bookname").value;
    let author=document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let subcategory=document.getElementsByName("CheckBox");
    var subcat ='';
    for(var checkbox of subcategory){
        if(checkbox.checked){
            subcat=subcat+""+checkbox.value;
        }
    }
    let price =document.getElementById("price").value;
   let status='';
   if(document.getElementById("Radio").checked ){
    status=document.getElementById("Radio").value ;
    }else{
     status=document.getElementById("Radio1").value;
    }
       if(editdata1 == true){
        let id1=localStorage.getItem("id");
        let index1;
        let data=JSON.parse(localStorage.getItem("book store"));
        let edit=data.find((x,index)=>{
        return x.book_id==id1 ?(index1=index,true):false;
        })
        if(edit){
            data[index1].book_name =name;
            data[index1].book_author =author;
            data[index1].book_category =category;
            data[index1].book_sub_category=subcat;
            data[index1].book_price=price;
            data[index1].book_status=status;
            localStorage.setItem("book store",JSON.stringify(data));
            location.reload();
        }
       }
       else{
            
        if(id.length == 0 || name.length ==0 || author.length ==0|| category.length==0 ||subcat.length==0 || price.length==0 && status.length==0){
            alert("please fill all the boxes.");
            
      }
      else{
        var addbook =
        {
            book_id:id,
            book_name:name,
            book_author:author,
            book_category:category,
            book_sub_category:subcat,
            book_price:price,
            book_status:status ,
     }
     let book_list_data =[];
     book_list_data.push(addbook);
     book_list.push(addbook);
    localStorage.setItem("book store",JSON.stringify(book_list));
    tablestoredata(book_list_data);
    document.querySelector(".formdetails").style.display = "none";
      }
       }
       document.getElementById("bookid").value = "";
       document.getElementById("bookname").value = "";
       document.getElementById("author").value = "";
       document.getElementById("category").value="";   
       document.getElementById("CheckBox").checked=false;
       document.getElementById("CheckBox1").checked=false;
       document.getElementById("CheckBox2").checked=false;
       document.getElementById("price").value = "";
       document.getElementById("Radio").checked=false;
       document.getElementById("Radio1").checked=false;
    }  

   function tablestoredata(inputdata){                                                                               //table store data .
    if(inputdata !==undefined  && inputdata.length > 0){                                                                                   
        for(let add of inputdata){
var  tr = document.createElement('tr');
 var tbody = document.createElement('tbody');
 tr.appendChild(document.createElement('td')).innerHTML = add.book_id;
 tr.appendChild(document.createElement('td')).innerHTML = add.book_name;
 tr.appendChild(document.createElement('td')).innerHTML = add.book_author;
 tr.appendChild(document.createElement('td')).innerHTML = add.book_category;
 tr.appendChild(document.createElement('td')).innerHTML = add.book_sub_category;
 tr.appendChild(document.createElement('td')).innerHTML = add.book_price;
 tr.appendChild(document.createElement('td')).innerHTML = add.book_status;
  tr.appendChild(document.createElement('td')).innerHTML = `<button type="button" onclick='deletedata(${add.book_id});'> Remove </button>` ;
  tr.appendChild(document.createElement('td')).innerHTML = `<button type="button" onclick='editdata(${add.book_id});'> Edit </button>`;
  tbody.appendChild(tr);
  document.getElementById("book1").appendChild(tbody);
   }
   
}
else{
    document.getElementById("nobooks").style.display="block";
}
   }
   
 tablestoredata(book_list);

function clearfield(){                                                                        // clear the form when i click cancel btn
    document.getElementById("bookid").value = "";
    document.getElementById("bookname").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value="";   
    document.getElementById("CheckBox").checked=false;
    document.getElementById("CheckBox1").checked=false;
    document.getElementById("CheckBox2").checked=false;
    document.getElementById("price").value = "";
    document.getElementById("Radio").checked=false;
    document.getElementById("Radio1").checked=false;

  document.querySelector(".formdetails").style.display = "none";
}
  document.getElementById("cancel").addEventListener('click',clearfield);


  function searching(){                                                                    // searching for the book id or book name
   let searching= document.getElementById("search").value;
    let books=[];
    if(searching.length>0)
    try{
        
            if(isNaN(searching)){
                books.push(getbyName(searching));
               }else{
                books.push(getbyid(searching)) ;
               }
               
             
               searchbeforerow();
            //    document.querySelector(".tablesetting").style.display = "none";
            //    document.querySelector(".searchtablesetting").style.display = "block";
               tablestoredata(books);
               

    }
    catch(e){
        document.querySelector("#nobooks").style.display="block";
        document.querySelector(".tablesetting").style.display = "none";
        
    }
}

  function getbyid(id){
    let book;
    if(book_list.length>0){
        for(let i=0 ; i<book_list.length;i++){
            if(book_list[i].book_id === id){
                    book=book_list[i];
                break;
            }
        
            }
        }
    return book;
}

function getbyName(Name){
    let book;
    if(book_list.length>0){
        for(let i=0 ; i<book_list.length;i++){
            if(book_list[i].book_name=== Name){
                    book=book_list[i];
                break;
            }
        }
    }
    return book;
    }

var editdata1=false;

function editdata(id){
    editdata1=true;
    var table = document.getElementById("book1"),rindex;
     for( var i=0 ; i< table.rows.length; i++){
        table.rows[i].onclick=function(){
            rindex=this.rowIndex;
    document.getElementById("bookid").value = this.cells[0].innerHTML;
    document.getElementById("bookname").value = this.cells[1].innerHTML;
    document.getElementById("author").value = this.cells[2].innerHTML;
    document.getElementById("category").value = this.cells[3].innerHTML; 
    if(this.cells[4].innerHTML === "History" ){
        document.getElementById("CheckBox").checked=true;
    }
    else if(this.cells[4].innerHTML === "Politics" ){
        document.getElementById("CheckBox1").checked=true;
    }
    else{
        document.getElementById("CheckBox2").checked=true;
    }
    
    document.getElementById("price").value = this.cells[5].innerHTML;
    if(this.cells[6].innerHTML === "Barrow" ){
        document.getElementById("Radio").checked=true;
    }
    else{
        document.getElementById("Radio1").checked=true;
    }
    
}
     }
    document.querySelector(".formdetails").style.display = "block";
    let name = document.getElementById("bookname").value;
    let author=document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let subcategory=document.getElementsByName("CheckBox");
    var subcat ='';
    for(var checkbox of subcategory){
        if(checkbox.checked){
            subcat=subcat+""+checkbox.value;
        }
    }
    let price =document.getElementById("price").value;
   let status='';
   if(document.getElementById("Radio").checked ){
    status=document.getElementById("Radio").value ;
    }else{
     status=document.getElementById("Radio1").value;
    }  
    localStorage.setItem("id",id);

}

    function deletedata(rindex){                                         // delete the row
     var filt = book_list.filter((a,i)=>{
        if(rindex == a.book_id){
            book_list.splice(i,1);
            localStorage.setItem("book store",JSON.stringify(book_list));
            tablestoredata(book_list);
        }
     })
     location.reload();
    }

function searchbeforerow(){
    
    let table= document.getElementById("book1");
   let rows= table.rows.length;
   console.log("no of rows"+rows);
   for(let j=rows ;j>1;j--){
    document.getElementsByTagName("tr")[j-1].remove();
   }
}