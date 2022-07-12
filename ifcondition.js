// let c=20;
// let b=10;
// let add=c+b;

// if(add<30 && a>20){
//     console.log(true)
// }
// else{
//     console.log(false)
// }
// const a=10
// switch(true){
//     case a>5:
//         console.log (true)
//         break;
//     case a>=20:
//         console.log('(a is more than 20)')
//         break;
//     default:
//         console.log('oopps sorry')
// }
// let age=20;
// let beverage=(age<15) ? "beer":"juice"
// console.log(beverage)

// let ages=20;
// let grades=50;
// let grade=(ages>=30 && grades>=80) ? true: false
// console.log(grade)

// const materials=["locker","Tables","Chairs","computer","Television"];
// myloop:
// for(let i=0;i<materials.length;i++){
//     if (i==3){
//         // break;
//         continue myloop;
//     }
//     console.log(materials[i]);
// }
// let i=0;
// for(let i=0;i<20;i++){
//     if(i%2==0){
//         console.log("even")
//     }
//     else{
//         console.log(i)
//     }
// }
const material=["locker","Tables","Chairs","computer","Television"];
const food=["chapati","ugali","chicken","fish","chips"]
const person={
    name:"Mercy",
    age:20,
    height:20.3
}
outerloop:
for(let i=0;i<material.length;i++){
    for(let j=0;i<food.length;j++){
        if(j==3) continue outerloop;{
            console.log(food[j],material[i]);
        }
    
    }

}
// material["additional"]="one"

// for(x in material){
//     console.log(x)
// }
// for(y of material){
//     console.log(y)
// }
// for(w in person){
//     console.log(w)
// }