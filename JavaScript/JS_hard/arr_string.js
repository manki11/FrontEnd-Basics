let string="Mankirat Singh";

let char= string.split('')
console.log(char);


let words= string.split(' ')
console.log(words);

console.log(words.join(' '));
console.log(char.join(''));

let str1="abcdef";
let d= str1.split('')[str1.length-3];

console.log(d);

let date="2017-07-11";
console.log(date.split("-").join("/"));
