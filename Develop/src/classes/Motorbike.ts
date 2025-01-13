// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {

  //Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  
  // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string, 
    year: number, 
    weight: number, 
    topSteed: number,
    wheels: Wheel[]
  ) {
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSteed;

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  // TODO: Override the printDetails method from the Vehicle class

  override printDetails(): void {

  // TODO: The method should call the printDetails method of the parent class
  super.printDetails();
  // TODO: The method should log the details of the Motorbike
  console.log(`VIN: ${this.vin}`);
  console.log(`Color: ${this.color}`);
  console.log(`Make: ${this.make}`);
  console.log(`Model: ${this.model}`); 
  console.log(`Year: ${this.year}`);
  console.log(`Weight: ${this.weight} lbs`);
  console.log(`Top Speed: ${this.topSpeed} mph`);
  console.log(`Wheels: ${this.wheels[0].getDiameter} inch ${this.wheels[0].getTireBrand} tires`);
  }
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
}

// Export the Motorbike class as the default export
export default Motorbike;
