let arr=[1,2,3,4,5,6,7,8,9];

let sarr= arr.map(function (item, index, array) {
    return item* item;
});

console.log(sarr);

let rootarr= arr.map(Math.sqrt);

console.log(rootarr);

let revarray= arr.map(function(item,index,array){
    return array[array.length-index-1];

})

console.log(revarray);

