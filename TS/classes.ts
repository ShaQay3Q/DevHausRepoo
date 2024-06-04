class Car {
    // Field member
    readonly brand: string;
    year: number;
    color: string;
    isAvailable: boolean;
    private customer: string;

    // Constructor
    constructor(brandName: string, yearBuild: number, colorType: string) {
        this.brand = brandName;
        this.year = yearBuild;
        this.color = colorType;
        this.isAvailable = true;
        this.customer = "";
    }

    // Method: function inside a class
    drive() {
        console.log(`${this.color} car from ${this.brand} is driving.`);
    }

    // Method: rent()
    // - check if car is available
    // - if so: change status of isAvailable
    rent(customerName: string) {
        if (this.isAvailable) {
            this.isAvailable = false;
            this.customer = customerName;
            console.log(`Car from ${this.brand} is rentend.`);
        } else {
            console.log(`Car from ${this.brand} is already rented.`);
        }
    }

    // GET methods
    getCustomer() {
        return this.customer;
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

yourCar.rent("Lisa");
yourCar.rent("Hannah");

// call get method
console.log(yourCar.getCustomer());