function msg(){
    document.write("welcome");
}
document.write(typeof msg +"<br>");
document.write(msg instanceof Object);


var body = " return Math.PI * radius * radius" ;
         var circle =   new Function( "radius" ,body);
         document.write(  circle(5));



         function Book (author , type){
            this.author=author;
            this.type=type;
            this.getDetails =   function() {
                                            return this.author +" "+ this.type;
                                           }  
         }
         var book = new Book("Fiction", "Peter King");
        console.log(book.getDetails());   


                function negate(f){
                           return  function (i) {
                            return !f(i);
                           }
                }

                    var isNumb = negate(is);
                    document.write(isNumb(5));
                    document.write(isNumb(NaN));
