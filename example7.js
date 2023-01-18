
                    function original(){
                       document.write("i'm original");
                    }
                    var copy=original;
                    original();
                    copy();
                    original=function(){
                       document.write("i'm alterd");
                    };
                    original();
                    copy();

                  
                   function action (callback,a,b)
                            {
                                       var result = callback(a,b);
                                       document.write( "<br>"+result);
                            }
                   function add(a,b){
                    return a+b;
                   }
                   function multiply(a,b){
                    return a*b;
                   }
                    action(add ,2,3);
                    action(multiply,2,3);


                        function count(){
                            var count1=0;
                            var inc = function(){
                                return ++count;
                            }
                            return inc;
                        }
                            console.log(count);




                    
                               function counter() {
                                var x=10;
                                var y=function(){
                                    x+= 1;
                                    console.log(x);
                                    return x;
                                }
                                return y;
                               }
                               document.write(counter());

                               var t=counter();
                               var u=counter();
                               t();
                               t();
                               u();
                               u();
                               u();
    // bind
                function add(a,b,c){
                    document.write("<br>");
                   document.write( a+b+c);
                } 
                 var bound = add.bind(null,1,2);
                        var c=bound(3);
                       



var x=20;
 function abc(){
    var b =30;
    console.log(b);
 }
 (function(){
    var days=['sunday','monday','tuesday','wendesday','friday','saturday'];
    var today = new Date();
    var msg =days[today.getDay()];
    console.log(msg);
 } ());