let arr=[1, 22, 33,44,9,2,11,10,6,899,7,9,10];

function  numIncCompare(a,b) {
    if(((a%10)-(b%10))==0){
        return (a%100)-(b%100)
    }else{
        return ((a%10)-(b%10));
    }

    return ((a%10)-(b%10)==0)?(a%100)-(b%100):(a%10)-(b%10);

}

console.log(arr.sort(numIncCompare));
