class Car {
  constructor({make, model, year}) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Truck {
  constructor({make, model, year}) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class Factory {
  constructor(type) {
    this.type = type;
  }

  create = (options) => {
    let vehicle;
    const vehicleType = this.type;

    switch (vehicleType) {
      case 'car': {
        vehicle = new Car(options);
        break;
      }
      case 'truck': {
        vehicle = new Truck(options);
        break;
      }
    }

    vehicle.vehicleType = vehicleType;

    return vehicle;
  };
}

const TruckFactory = new Factory('truck');
const CarFactory = new Factory('car');

const truck = TruckFactory.create({
  make: 'Ford',
  model: 'F150',
  year: 2018,
});

const car = CarFactory.create({
  make: 'Honda',
  model: 'Civic',
  year: 2018,
});

console.log(truck);
console.log(car);
