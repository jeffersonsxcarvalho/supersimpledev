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


//7h Update 7g - now includes feet

console.log('CONVERT LENGTH UPDATE INCLUDES MILES');

function convertKmtoFeets(km) {
	const feet = km * 3281
	console.log(km + ' km in feets is approximately: ' + feet + ' miles.');
}

function convertFeetstoKm(feet) {
	const km = feet / 3281;
	console.log(feet + ' feet is approximately: ' + km + ' km.');
}

function convertMilestoFeets(miles) {
	const feet = miles * 5280;
	console.log(miles + ' miles is approximately: ' + feet + ' feets.');
}

function convertFeetstoMiles(feet) {
	const miles = feet / 5280;
	console.log(feet + ' feet is approximately: ' + miles + ' miles.');
}

function convertLength2(length, from, to) {
	if(from === 'km' && to === 'miles'){
		convertKmtoMiles(length);
	}else if(from === 'miles' && to === 'km') {
		convertMilestoKm(length);
	}else if(from === 'miles' && to === 'feet') {
		convertMilestoFeets(length);
	}else if(from === 'feet' && to === 'miles') {
		convertFeetstoMiles(length);
	}else if(from === 'km' && to === 'feet') {
		convertKmtoFeets(length);
	}else if(from === 'feet' && to === 'km') {
		convertFeetstoKm(length);
	}
}

convertLength2(1000, 'km', 'miles');

convertLength2(1500, 'miles', 'km');

convertLength2(1600, 'km', 'miles');

convertLength2(1000, 'km', 'feet');

convertLength2(4000, 'feet', 'km');

convertLength2(10000, 'feet', 'miles');

convertLength2(1600, 'miles', 'feet');

//7i Update 7h, add invalid unit if it is.

console.log('ADDING INVALID UNIT');

function convertLength3(length, from, to) {
	if(from === 'km' && to === 'miles'){
		convertKmtoMiles(length);
	}else if(from === 'miles' && to === 'km') {
		convertMilestoKm(length);
	}else if(from === 'miles' && to === 'feet') {
		convertMilestoFeets(length);
	}else if(from === 'feet' && to === 'miles') {
		convertFeetstoMiles(length);
	}else if(from === 'km' && to === 'feet') {
		convertKmtoFeets(length);
	}else if(from === 'feet' && to === 'km') {
		convertFeetstoKm(length);
	}else if(from !== 'feet' && from !== 'miles' && from !== 'km'){
		console.log(`Invalid Unit: ${from}`);
	}else if(to !== 'feet' && to !== 'miles' && to !== 'km'){
		console.log(`Invalid Unit: ${to}`);
	}
}

convertLength3(5680, 'mile', 'feet');//Invalid unit: mile


//7j - copy of 5r


//let result = 0;

let calculation = '';

let p1 = document.querySelector('.js-result');
let p2 = document.querySelector('.js-calculation');

p1.innerHTML = 'Resultado: '


function showResult(result){
	p1.innerHTML = 'Resultado: <span class="res">' + result + '</span>';
}

function showCalc(calculation){
	p2.innerHTML = 'Cálculo: <span class="calc">' + calculation.replace('*', 'x') + '<span>';
}

const btn = document.querySelectorAll('div button');

/* Try to show the number before it's calculated.

btn.forEach((elem) => {
	elem.addEventListener('click', () => {
		const res = eval(calculation) || result;
		showResult(res);
	})
})*/
//console.log(btn);

//7j

function updateCalculation(char) {
	if(char !== ''){
		calculation += char;
	}else{
		calculation = char;
	}
	 
	console.log(calculation); 
	showCalc(calculation)
	
}


//7k copy of the cartQuantity project 6l

let cartQuantity = 0;

function updateCartQuantity(num){
	cartQuantity += num;
	if(num === -1){
		if(cartQuantity < 0){
			alert('Cart is empty!');
			cartQuantity++;
		}
	}else if(cartQuantity < 0){
		alert(`Cart has already less than ${(num**2)**(1/2)} items!`);
		cartQuantity -= num;
	}else if(cartQuantity > 10){
		alert('Maximum of 10 items!');
		cartQuantity -= num;
	}

	console.log(cartQuantity);	
}

//7l didn't understand
