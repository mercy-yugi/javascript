// console.log("hello mercy")
// // reassigning values
// let x=5;
// console.log(x)
// x=10;
// console.log(x)
// // const can not be changed at all
// // const y=20;
// // y=50;
// // console.log(y)
// console.log("I love javascript")
// // string concatenation
// const greet="Hello";
// const name="Mercy";
// console.log(greet + '' + name);
// console.log(greet + name)
// console.log("${greet} ${name}")
// using symbol is unique and constraints the element to a specific id
// const value1=Symbol("hello mercy");
// const value2=Symbol("hello mercy");
// console.log(value1);
// console.log(value2);
// creating a simple object
// const student={
//     firstname:"Mercy",
//     lastname:"Yugi",
//     class:10
// }
// console.log(student)
// knowing the datatypes
// const a=null;
// console.log(typeof(a))
// implicit conversion, one data type is converted to the right data type automatically.
// var sum='5'+null
// console.log(sum)
// var sums='5'+'10'
// console.log(sums)
// var sums='5'*3
// console.log(sums)
// result = 4 + false;
// console.log(result);
// result = 4 + null;
// console.log(result);
// result = 4 + undefined;
// console.log(result);
// result = Number(true);
// console.log(result);
// explicit conversion are done using functions
// let results;
// results=parseInt('20.01');
// console.log(results)
// results=parseFloat('20.01')
// console.log(results)
// results=Math.floor('20.01')
// console.log(results)
// const a=5,b=2,c="hello";
// console.log(a==5);
// console.log(c=="mercy")
// console.log(a!=10);
// console.log(a>2);
// control flow-if..else
// let number=2;
// if (number>0){
//     console.log("NUmber isgreater thatn zero")
// }
// else{
//     console.log("NUmber is not greater than zero")
// }
// const n=10;
// for(let i=1;i<=n;i++){
//     console.log("I love javascript");
//     // console.log(i)
// }
// let sum=0;
// for(let i=100;i<200;i++){
//     sum+=i
// }
// console.log("The sum is: ",sum)
// let sum=0;
// const n=100;
// for(let i=n;i>=1;i--){
//     sum+=i
// }
// console.log("The sum is: ",sum)
// let sum=0;
// for(i=10;i<=20;i++){
//     if (i%2==0){
//         console.log("even")
//     }
// }
// let sum=0;
// let number=parseInt(prompt("Enter a number: "));
// while(number>=0){
//     sum+=number;
//     number=parseInt(prompt("Enter a number: "));
// }
// console.log("The sum is ${sum}.");
// program to display numbers
// let i=1;
// const n=5;
// do{
//     console.log(i);
//     i++;
// }
// while(  i<=n);

// let i=1;
// const n=5;
// do{
//     console.log("i love javascript");
//     i++;
// }
// while(i<=n);
// for(i=0;i<=5;i++){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }
for(let i=1;i<=4;i++){
    for(let j=1;j<=4;j++){
        if(i==2){
            break;
        }
        console.log("i=",i,"j=",j);
    }
}