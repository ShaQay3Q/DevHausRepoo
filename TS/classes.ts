class Car {
    // field member
    readonly brand: string;
    year: number;
    color: string;
    isAvailable: boolean;

    // Constructor
    constructor(brandName: string, yearBuild: number, colorType: string) {
        this.brand = brandName;
        this.year = yearBuild;
        this.color = colorType;
        this.isAvailable = true;
    }

    // Method: function inside a class
    drive() {
        console.log(`${this.color} car from ${this.brand} is driving.`);
    }

    // Method: rent()
    // - check if car is available
    // - if so: change status of isAvailable
    rent() {
        if (this.isAvailable){
            this.isAvailable = false
        }
    }
}

// create instance of class
const myCar = new Car("Renault", 1998, "red");
const yourCar = new Car("Toyota", 2004, "blue");

// change field members
yourCar.color = "black";
// myCar.brand = "VW"; // readonly

// access field member
// console.log(yourCar.color + yourCar.brand);

// call method
yourCar.drive();
console.log(yourCar.isAvailable);
yourCar.rent();
console.log(yourCar.isAvailable);
