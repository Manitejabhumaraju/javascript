console.time("7.js")
const age =35;
// const drive = true;
// if(age==19){
//     console.log('age is'+age)
// }
// else if (age >0 && age<100){
//     console.log("alive and age is"+age)
// }
// else if (age){
//     console.log("age is given")
// }
// else{
//     console.log("alien")
// }

// if (age ==18 || drive==false){
// console.log("you are free to drive")
// }
// else{
// console.log("you are not free to drive")
// }

console.log(age==18? "age is 18" : " age is not 18")
switch (age) {
    case 18:
        console.log("u r 18")
        break;
    case 35:
        console.log("u r 35")
        break;
    default:
        console.log("u r not human")
        break;
}
console.timeEnd("7.js")
