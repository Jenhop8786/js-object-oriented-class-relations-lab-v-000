let store = {drivers: [], passengers: [], trips: []};
let driverId = 0

class Driver {
  constructor(name) {
    this.name = name;
    this.id = driverId++;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.().maps(trip => {
      return trip.passenger();
    })
  }

  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    })
  }
}

  let passengerId = 0

  class Passenger {
    constructor(name) {
      this.name = name;
      this.id = passengerId++;
      store.passengers.push(this);
    }

     drivers() {
       return this.trips().map(trip => {
         return trip.driver();
       })
     }

     

  }
}
