console.time("9.js")
// functions

function mani(m,n){
    console.log("virat kohli "+m+" "+n)
    console.log(`hi i am ${n} fan of ${m}`)
return "hero";
}

m=mani(18);
console.log(m,"mani teja");
const myobj ={
    name:"mani teja",
    fan:function(){
        return "virat bhai"
    }
}
console.log(myobj.fan())

arr=[1,2,3,4,5,6,7,8,9]
arr.forEach(function(element,index,arr){
    console.log(element,index)
});
var i=234;
console.log(i);
function ui(name){
    return `this is a ${name} ui`

}
console.log(ui("mani teja"),i)

console.timeEnd("9.js")