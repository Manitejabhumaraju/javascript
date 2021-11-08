console.time("4.js");
console.log("mani teja");
// type conversion
var m;
m= String(18);
n= Number(m);
console.log(m,typeof m);
console.log(n,typeof n);
let booleanvs= String(true);
let booleanvn= Number(false);
console.log(booleanvs,typeof booleanvs);
console.log(booleanvn,typeof booleanvn);
let d=String(new Date());
let k=String(d)
let l=Number(d)
console.log(d,typeof d)
console.log(k,typeof k)
console.log(l,typeof l)

let arr=[1,2,3,4,5,6,7,8,9]
console.log(arr,typeof arr)
console.log(String(arr.length),typeof arr)
console.log(arr.length.toString(),typeof arr)
let parser=parseFloat(1.2356)
console.log(parser.toFixed(4))
// type coercion
let myvar="698";
let mynum=34;
console.log(Number(myvar)+mynum)

console.timeEnd("4.js");