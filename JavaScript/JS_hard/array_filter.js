let arr=[1,2,3,4,5,6,7,8,9];

let even= arr.filter(function (item,index,array) {
    return item%2==0?item:false;
})

console.log(even);