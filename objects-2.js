/*
       let's have a look on a new way to crete objects in javascript.
         



*/

var a = new Object();
a.fname = "Muhammad";
a.lname = "Shakir";
a.age = 21;
a.phno = +923333188764;

a.fullname  = function(){
    return this.fname + " " + this.lname;
}

document.write(a.fullname());
document.write(a.age);
document.write(a.phno);