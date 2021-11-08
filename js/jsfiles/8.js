console.time("8.js")
// for while do whie
// for (let i=1;i<=10;i++){
// console.log("2 *"+" ",+i ,'=', + (2*i))
// }
// let j=110
// do{
//     console.log(j+1);
//     j++
// }while(j<10);
// k=0
// while(k<10){
//     console.log(k)
//     if (k==5){
//         break;
//     }
//     k++
// }
let arr =[18,2,3,4,5,6,7,8,9]
// arr.forEach(function(element){
//     console.log(element)
// });
// for (let i = 0;i< arr.length;i++){
//     const ele = arr[i];
//     console.log(ele)
// }
let myobj={
    name:"mani teja",
    os:"windows 11",
    age:18,
    fan:"virat"

}
for (let key in myobj){
    console.log(` the ${key} of object is ${myobj[key]}`)
}

console.timeEnd("8.js")