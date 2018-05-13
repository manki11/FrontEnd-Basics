function createPerson(name, age) {
    return {
        name: name,
        age: age,
        isAdult: function () {
            return (age > 18);
        }
    }
}

let p1 = createPerson("Mankirat", 19);

console.log(p1.isAdult());
console.log(p1.age);
console.log(p1.name);


let a={p:10};
let b= Object.create(a);
let c= Object.create(b);
let d= Object.create(c);



console.log(b.p);
b.p++;

console.log(b.p);
console.log(a.p);



