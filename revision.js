console.log("hello mercy")
var x=10;
var y=20;
var sum=x+y;
console.log(sum);
var name=window.prompt("Enter your name: ");
alert("Your name is "+name);
// // creating a dictionary/object in javascript
let obj={}
obj.y=3;
obj.z=5;
obj.w=10;
console.log(obj)
let names={}
names.name="Mercy","yugi","achieng"
console.log(names)
let statement={}
statement.name="Mercy"
statement.age=23;
statement.weight=53.5;
console.log(statement)
// // block scope
function children(){
    var name="Mercy"
    console.log({name})
}
children()
console.log({name})
// function scope
// var is restricted inside a function scope only. it is the best to be used.
function ages(){
    if(true){
        var age1=20;
        let age2=23;
        const age3=25;
    }
   
    console.log({age1})
    console.log({age2})
    console.log({age3})
}
ages();
// nested scope-function iside a function
function num(){//parent
    var a=2;
    function add(){//child
        var b=3;
        var c=a+b;
        console.log(c)
    }
    add()
}
num()
var x=10;
function num1(){
    var y=20;
    function num2(){
        var z=30;
        return x+y+z;
    }
    return num2()
}
var num=[1,2,3,4,5,6,7,8,9,10];
let sum=0
for (let i=1;i<num.length;i++){
 sum+=i;   
}
console.log(sum)
// strict mode
"use strict";
let mistypedVariable;
mistypeVraible=0
