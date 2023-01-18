var nation ={
      name:"kamal",
      age:"25",
      Course:"javascript",
      language:"en",
      get lang(){
        return this.language;
      }
}
document.write(nation.lang.toUpperCase());


var nation1 ={
    name:"lavanya",
    age:12,
    course:6,
    language:"",
    set lang(lang1){
                this.language=lang1;
    }
};
   nation1.lang="en"
document.write("<br>");
document.write(nation1.language);


var nation2={
    name:"kavitha",age:30,lang:"en", fullname: function(){
                                                            return this.name+"is"+this.age+this.lang;
                                                           }

}

document.write("<br>");
document.write(nation2.fullname());



var nation3={
    name:"jan",
        age:25,
       get fullname(){
                this.name+"is"+this.age;
        }
}

document.write("<br>");
document.write(nation3.fullname);