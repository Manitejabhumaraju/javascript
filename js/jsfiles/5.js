console.time('5.js')
console.log('mani')
let html;
html = "<h1>this in mani teja</h1>" +
        "<p>this is me </p>";
console.log(html)
// html=html.concat("bhumaraju")
// console.log(html)
// console.log(html.length)
// console.log(html.toLowerCase())
// console.log(html.toUpperCase())

console.log(html[10])
console.log(html.indexOf('e'))
console.log(html.lastIndexOf('<'))
console.log(html.charAt(40))
console.log(html.endsWith('>'))
console.log(html.includes('mani teja'))
console.log(html.includes('mani teja bhumaraju'))
console.log(html.substring(0,40))
console.log(html.slice(0,40));
console.log(html.split(' '));
console.log(html.replace('this',12))

let name = 'mani';
let name1 = 'teja';
let surname="bhumaraju"
let myHtml = `Hello ${name}
            <h1> This is my heading </h1>
            <h2>  ${surname} </h2>
            <a href="https://www.bing.com/images/search?q=virat+kohli&form=HDRSC3&first=1&tsc=ImageBasicHover"target ="_blank"><b><i>virat images</i></b></a>
            <p> You like ${name} and ${name1}`;

document.body.innerHTML = myHtml;    

// let name= "mani";
// let nemae1="teja";
// let myhtml=`hello ${name}
//     <h1>this is heading</h1>
//     <p>your name is ${name} and ${nemae1}</p>
    
//    ``;
// Document.body.innerHTML = myhtml;