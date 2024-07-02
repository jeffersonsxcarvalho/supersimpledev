//7a

console.log('GREET FUNCTION');

function greet() {
	console.log('hello');
}

greet();

greet();

greet();

//7b

//before seeing the hint
function greet(name) {
	//7c
	if(name === undefined){
		console.log('Hi, there!');
	}else {
		console.log(`Hello, ${name}!`);
	}	
}

//with the hint

function greet(name) {
	//7c
	if(!name){
		console.log('Hi, there!');
	}else {
		console.log(`Hello, ${name}!`);
	}	
}


greet('Jefferson');

greet('Simon');

greet('Larissa');

//7b I had done before seeing 7c I put a different name. If I put the same name it's gonna display 'undefined'

function greet2(name) {
	console.log(`Hello, ${name}!`);
}

greet2('Jefferson');

greet2('Simon');

greet2('Larissa');


//7d

console.log('CONVERT FROM CELCIUS TO FAHRENHEIT');

function convertToFahrenheit(celcius) {
	const fahrenheit = (celcius * 9/5) + 32;
	console.log(celcius + 'ºC is ' + fahrenheit + 'º Fahrenheit!');
}

convertToFahrenheit(100);

convertToFahrenheit(0);

//7e

console.log('CONVERT FROM FAHRENHEIT TO CELCIUS');


function convertToCelcius(fahrenheit) {
	const celcius = (fahrenheit - 32) * 5/9;
	console.log(fahrenheit + 'ºF is ' + celcius + 'º Celcius!');
}

convertToCelcius(100);

convertToCelcius(212);

convertToCelcius(86);


//7f 
//obs.: unit C converts to F, F converts to C
console.log('CONVERT TEMPERATURE');

function convertTemperature(degrees, unit) {
	if(unit === 'C' || unit === 'c'){
		convertToFahrenheit(degrees);
	}else if(unit === 'F' || unit === 'f'){
		convertToCelcius(degrees);
	}
}

convertTemperature(86, 'F');
convertTemperature(32, 'f');

convertTemperature(100, 'c');
convertTemperature(0, 'C');

//7g CONVERTS KM TO MILES OR MILES TO KM

console.log('CONVERT LENGTH');

function convertKmtoMiles(km) {
	const miles = km / 1.6;
	console.log(km + ' km in miles is: ' + miles + ' miles.');
}

function convertMilestoKm(miles) {
	const km = miles * 1.6;
	console.log(miles + ' miles in km is: ' + km + ' km.');
}

function convertLength(length, from, to) {
	if(from === 'km' && to === 'miles'){
		convertKmtoMiles(length);
	}else if(from === 'miles' && to === 'km') {
		convertMilestoKm(length);
	}
}

convertLength(1000, 'km', 'miles');

convertLength(1500, 'miles', 'km');

convertLength(1600, 'km', 'miles');
