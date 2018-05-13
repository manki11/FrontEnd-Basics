function Vehicle(color, seats) {
    this.color=color;
    this.seats=seats;
    let wheels;

    this.getWheels= function () {
        return wheels;
    }

    this.setWheels= function (wh) {
        wheels=wh;
    }

    this.canaccomodate=  function (people) {
        return people<=seats;
    }
}

let bike=new Vehicle("red",2,2);
let car=new Vehicle("blue",5,4);

console.log(bike.canaccomodate(4));
console.log(car.canaccomodate(3));

bike.setWheels(2);
car.setWheels(4);


console.log("bike wheels:"+bike.getWheels());
console.log("bike wheels:"+car.getWheels());