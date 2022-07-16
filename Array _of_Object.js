/*
    Now let's create a new array of objects.
    We will use the array constructor.
    The array constructor is an array that can be used to create an array of objects.



*/
var ary = [
    {fullname : "Muhammad Shakir" , Age: 21},
    {fullname: "Anum Mustafa" , Age : 22},
    {fullname: "Shiza Junaid", Age : 19},
];

for(var a=0; a < 4; a++){
    document.write(ary[a].fullname + " " + ary[a].Age);