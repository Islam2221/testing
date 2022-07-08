
class Car {
	constructor(engine, site, door, volume, date){
		this.engine = engine
		this.site = site
		this.door = door
		this.volume = volume
		this.date = date
		
		
	}

	saySignal (){
		console.log('');

	}
	

	sayStart (){
		console.log('');
	}

	sayStop (){
		console.log('');
	}
	



}

class Mercedes extends Car {
	constructor (engine, site, door, volume, date){
		super(engine, site, door, volume, date)
	}

}
console.log(new Mercedes('petrol', 5, 4, 6.3, 2022));


class BMW extends Car {
	constructor(engine, site, door, volume, date) {
		super(engine, site, door, volume, date)
	}
}
console.log(new BMW('diesel', 5, 4, 4.4, 2021))

class Audi extends Car {
	constructor(engine, site, door, volume, date) {
		super(engine, site, door, volume, date)
	}
}
console.log(new Audi('petrol', 4, 2, 4.0, 2020))
