console.time("3.js")
// primitive data types
// string
var name="mani"
console.log(name)
console.log(typeof name)
// num
var num=18
console.log(num+typeof num)
// null
var n=null
console.log(n+typeof n)

// reference datatypes
// arrays
arr=[10,20,3,04,04,55,0,585]
console.log(arr+typeof arr)

//object literals
let marks={
    mani:100,teja:100
}
console.log(marks,typeof marks)
// function
function mani(num) {
    console.log("my function is running",num)
}
console.log(typeof mani)
mani(27)
let date=new Date();
console.log(date)
console.timeEnd("3.js")