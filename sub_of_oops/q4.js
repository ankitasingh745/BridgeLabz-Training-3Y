class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null || typeof this.distance !== "number") {
      throw new Error("Distance is required and must be a number");
    }
    if (this.distance < 0) {
      throw new Error("Distance cannot be negative");
    }
    const baseFare = 50;
    const perKm = 12;
    return baseFare + this.distance * perKm;
  }
}

const rider = new User("Simran", 4.8);
const driver = new Driver("Vikas", 4.6, { model: "Swift Dzire", number: "CH01 AB 1234" });
console.log(`Rider: ${rider.name} (${rider.rating}), Driver: ${driver.name} in ${driver.vehicle.model} [${driver.vehicle.number}]`);

const trips = [
  new Trip("Sector 17", "Airport", 15),
  new Trip("Sector 22", "Sector 35", -5),
  new Trip("Sector 10", "Zirakpur"),
];

trips.forEach((t) => {
  try {
    console.log(`${t.fromLocation} -> ${t.toLocation}: Fare = Rs.${t.calculateFare()}`);
  } catch (err) {
    console.log(`${t.fromLocation} -> ${t.toLocation}: Error - ${err.message}`);
  }
});