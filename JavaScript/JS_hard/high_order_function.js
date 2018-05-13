function createGreeting(name) {
    function greeting() {
        console.log("Hi "+ name);
    }

    return greeting;
}

worldGreeting=createGreeting("Mankirat");
console.log(worldGreeting());