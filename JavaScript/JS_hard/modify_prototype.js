

Array.prototype.filterNums= function () {
    // // long method
    // let arr=[];
    // for(i=0;i<this.length;i++){
    //     if(typeof(this[i])==="number"){
    //         arr.push(this[i]);
    //     }
    // }
    //
    // return arr;


    //short method
    return this.filter(i=>(typeof i=="number"))
}


i=10;
console.log(typeof(i));

let arr=[1,2,"arrt", {s:10},"koi",9,10];

for (let obj of arr) {
    console.log(obj);
    
}

let arrfinal = arr.filterNums();
console.log(arrfinal);

