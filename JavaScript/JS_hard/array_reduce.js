let arr=[1,2,3,4,5,6,7,8,9];

let sum= arr.reduce(function (accumulator,item,index,array) {
    return accumulator*item;
})


console.log(sum);

