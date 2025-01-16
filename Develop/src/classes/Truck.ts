// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

//The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {

  //Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor that accepts properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize the properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Check if the wheels array has 4 elements
    // If not, create 4 new Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }

    // Initialize the towing capacity of the Truck
    this.towingCapacity = towingCapacity;
  }

  // Method to tow a vehicle
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make and model of the vehicle if it exists
    const name =
      vehicle.make && vehicle.model
        ? `${vehicle.make} ${vehicle.model}`
        : 'Unknown vehicle';

    // Check if the weight of the vehicle is less than or equal to the towing capacity of the Truck
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${name} is being towed`);
    } else {
      console.log(`${name} is too heavy to be towed`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();


    // Print details of the Truck class
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(
      `Wheels : ${this.wheels[0].getDiameter} inch ${this.wheels[0].getTireBrand} tires`
    );
  }
}

// Export the Truck class as the default export
export default Truck;
