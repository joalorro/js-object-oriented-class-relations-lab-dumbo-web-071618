const store = {
    drivers: [],
    passengers: [],
    trips: []
}

let driverId = 0 

class Driver {
    constructor(name){
        this.name = name 

        this.id = ++driverId 
        store.drivers.push(this)
    }

    trips() {
        return store.trips.filter(trip => trip.driverId === this.id)
    }
    passengers() {
        return this.trips().map(trip => trip.passenger() )
    }
}


let passengerID = 0

class Passenger {
    constructor(name){
        this.name = name 

        this.id = ++passengerID
        store.passengers.push(this)
    }

    trips() {
        return store.trips.filter( trip => trip.passengerId === this.id)
    }

    drivers() {
        return this.trips().map(trip => trip.driver() )
    }
}


let tripId = 0

class Trip {
    constructor(driver,passenger){
        this.driverId = driver.id
        this.passengerId = passenger.id
        
        this.id = ++tripId
        store.trips.push(this)
    }

    

    driver() {
        return store.drivers.find( driver => this.driverId === driver.id)
    }

    passenger() {
        return store.passengers.find(passenger => this.passengerId === passenger.id)
    }
}