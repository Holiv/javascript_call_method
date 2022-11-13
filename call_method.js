const qatarAirlines = {
	airline: 'Qatar Airline',
	iataCode: 'QT',
	booking: [],

	book(flightNum, name) {
		console.log(`${name} has booked a seat at the flight ${this.iataCode + flightNum} on the ${this.airline}`);
        this.booking.push(`${this.iataCode + flightNum}, ${name}`)
	},
}

qatarAirlines.book(4782 ,'Helton')
//will print to the console: Helton has booked a seat at the flight QT4782 on the Qatar Airline

const emiratesAirline = {
	airline: 'Emirates',
	iataCode: 'EA',
	booking: [],
}

qatarAirlines.book.call(emiratesAirline, 9836, 'Laiz')
//will print to the console: Laiz has booked a seat at the flight EA9836 on the Emirates