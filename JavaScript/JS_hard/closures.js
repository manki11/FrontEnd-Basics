function createCounters() {
    let x =0;

    function count() {
        return ++x;
    }

    return count;
}

let myCounter= createCounters();
let myOtherCounter= createCounters();
console.log(myCounter());
console.log(myCounter());
console.log(myOtherCounter());


