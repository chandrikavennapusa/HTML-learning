function addbook1(){                                                                          //add book
    document.querySelector("#nobook").style.display="none";                                                                                                  // addbook click button
    disable();
}
function disable(){
    document.querySelector(".formdetails").style.visibility="visible";   
    document.getElementById("search").disabled =true;    

    document.getElementById("image2").style.pointerEvents="none";
    document.getElementById("image2").style.cursor="default";

    for(i=0; i<document.getElementsByClassName("remove").length ;i++){
        document.getElementsByClassName("remove")[i].style.pointerEvents="none";
        document.getElementsByClassName("remove")[i].style.cursor ="default";
        document.getElementsByClassName("edt")[i].style.pointerEvents="none";
        document.getElementsByClassName("edt")[i].style.cursor ="default";
    }
}
function enabled(){
    document.querySelector(".formdetails").style.visibility="hidden";
    document.getElementById("search").disabled =false;

    document.getElementById("image2").style.pointerEvents="auto";
    document.getElementById("image2").style.cursor="pointer";
    for(i=0; i<document.getElementsByClassName("remove").length ;i++){
        document.getElementsByClassName("remove")[i].style.pointerEvents="auto";
        document.getElementsByClassName("remove")[i].style.cursor ="pointer";
        document.getElementsByClassName("edt")[i].style.pointerEvents="auto";
        document.getElementsByClassName("edt")[i].style.cursor ="pointer";
    }
}
var book_list=[];

var local_data = JSON.parse(localStorage.getItem("book store"));
if(local_data.length == 0){
    document.getElementById("nobook").style.display="revert";
}

if(local_data !== null ){
	if(local_data.length > 0){
		for( let data of local_data){
			book_list.push(data);
			}
	}
}

function bookidvalidation(value){                                                                        //duplicate book id is  not allowed.
    if( isDublicate(value)){
        document.getElementById("isdup").style.display='block';
        document.getElementById("digits").style.display='none'; 
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
    else{
        document.getElementById("isdup").style.display='none';   
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




document.getElementById("Radio1").disabled = true;
function formsaving(){   
    var id;                                                            // saving the for
    var validNumber = /^[0-9]+$/;   
    if(document.getElementById("bookid").value.match(validNumber)){
         id=document.getElementById("bookid").value;
        document.getElementById("digits").style.display='none';  
    }
    else{
        document.getElementById("digits").style.display='block';
        document.getElementById("bookid").value="";
    }
    
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
    var price1;                                                            // saving the for
    var validNumber1 = /^\d+(?:[.,]\d+)*$/;   
    if(document.getElementById("price").value.match(validNumber1)){
         price1=document.getElementById("price").value;
        document.getElementById("priceEle").style.display='none';  
    }
    else{
        document.getElementById("digits").style.display='none';  
        document.getElementById("priceEle").style.display='block';
        document.getElementById("price").value="";
    }

   let status = document.getElementById("Radio").value;
       if(editdata1 == true){
        let id1=localStorage.getItem("id");
        let index1;
        let data=JSON.parse(localStorage.getItem("book store"));
        let edit=data.find((x,index)=>{   return x.book_id==id1 ?(index1=index,true):false;  })
          if(edit){
            data[index1].book_name =name;
            data[index1].book_author =author;
            data[index1].book_category =category;
            data[index1].book_sub_category=subcat;
            data[index1].book_price=price1;
            data[index1].book_status=status;
            localStorage.setItem("book store",JSON.stringify(data));
        }
    }
        else{
            if(id.length == 0 || name.length ==0 || author.length ==0|| category.length==0 ||subcat.length==0 || price1.length==0 || status.length==0)
                {
                    console.log();
                }

            

      
         else{
                 if(id.length == 0 || name.length ==0 || author.length ==0|| category.length==0 ||subcat.length==0 || price1.length==0 || status.length==0)
                           {
                           console.log();
                           }
                  else{
                                   var addbook =
                                                     {
                                                        book_id:id,
                                                        book_name:name,
                                                        book_author:author,
                                                        book_category:category,
                                                        book_sub_category:subcat,
                                                        book_price:price1,
                                                        book_status:status ,
                                                    }

                                                    let book_list_data =[];
                                                    book_list_data.push(addbook);
                                                    book_list.push(addbook);
                                                   localStorage.setItem("book store",JSON.stringify(book_list));
                                                   tablestoredata(book_list_data);
                                                   document.querySelector(".formdetails").style.visibility="visible";
                                                       clearfield();
                     }
                    
                
             }
            
       }
    
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
  tr.appendChild(document.createElement('td')).innerHTML = `<a class="remove" onclick='deletedata(${add.book_id});'><i class="material-icons" >&#xe16c;</i></a>   
    <a class="edt" onclick='editdata(${add.book_id});'> <i class='fa fa-edit' ></i></a> ` ;
  tbody.appendChild(tr);
  document.getElementById("book1").appendChild(tbody);
   }
}
else{
    document.querySelector("#nobook").style.display ="revert";

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
    location.reload();
  enabled();
}
  document.getElementById("cancel").addEventListener('click',clearfield);

var editdata1=false;

function editdata(id){                                                                      //edit data
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
     document.querySelector(".formdetails").style.visibility="visible"; 
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
    document.getElementById("Radio1").disabled =false;
   let status='';
   if(document.getElementById("Radio").checked ){
    status=document.getElementById("Radio").value ;
    }else{
     status=document.getElementById("Radio1").value;
    }  
    localStorage.setItem("id",id);

}





    function deletedata(rindex){                                                                                            // delete data

       let isdelete= confirm('Are you sure?');

       if(isdelete){
        var filt = book_list.filter((a,i)=>{
            if(rindex == a.book_id){
                book_list.splice(i,1);
                localStorage.setItem("book store",JSON.stringify(book_list));
                tablestoredata(book_list);
            }})
 location.reload();
       }
    }    





        function searching(){                                                                    // searching for the book id
            let searching= document.getElementById("search").value;
           
            let table= document.getElementById("book1");
            
            let tr =table.getElementsByTagName('tr');
            let noResults = true;
            for(var i=0;i<tr.length;i++){
                let td =tr[i].getElementsByTagName('td')[0] ;
              
                if(td){
                    let textvalue =td.textContent || td.innerHTML;
                   
                    if(textvalue.indexOf(searching) > -1){
                        noResults = false;
                        tr[i].style.display="";
                    }
                    else{
                        tr[i].style.display ="none";
                    }
                    
                }
            }            
            document.getElementById("errmsg").innerHTML = noResults ? 'No records found' : '';
        }