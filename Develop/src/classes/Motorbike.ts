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
  
  // Constructor for the Motorbike class
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

    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Implement the wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  override printDetails(): void {

  //  call the printDetails method of the parent class
  super.printDetails();

  console.log(`VIN: ${this.vin}`);
  console.log(`Color: ${this.color}`);
  console.log(`Make: ${this.make}`);
  console.log(`Model: ${this.model}`); 
  console.log(`Year: ${this.year}`);
  console.log(`Weight: ${this.weight} lbs`);
  console.log(`Top Speed: ${this.topSpeed} mph`);
  console.log(`Front Wheel: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tires`);
  console.log(`Back Wheel: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tires`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
