console.time("6.js");
// arrays
const marks=[10,20,30,40,50];
const fruits=["m","a","n"]
const mixed =[20,"mani",true]
const arr = new Array(10,3,9,"virat")
console.log(marks)
console.log(fruits)
console.log(mixed)
console.log(arr[3])
console.log(arr.length)
console.log(arr.indexOf("virat"))
console.log(arr[2]="mani");
console.log(arr);
// mutating
// marks.push("virat")
// marks.pop()
// marks.unshift("virat") // push the element to zeroth index
// marks.shift() // rempve the element in the zeroth index
// marks.splice(0,1)
// marks.reverse()
// let k=marks.concat(fruits)
// console.log(k)

let myobj={
    name:"mani",
    id:"ai",
    my:"teja"
}

console.log(myobj)
console.log(myobj.my)


console.timeEnd("6.js");