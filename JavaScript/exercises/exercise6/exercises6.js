//6a

let hour = 7;

if(hour >= 6 && hour < 12){
	console.log('Good morning!');
}else if(hour >= 12 && hour < 17){
	console.log('Good afternoon!');
}else{
	console.log('Good night!');
}

//6b

hour = 15;

if(hour >= 6 && hour < 12){
	console.log('Good morning!');
}else if(hour >= 12 && hour < 17){
	console.log('Good afternoon!');
}else{
	console.log('Good night!');
}

hour = 20;

if(hour >= 6 && hour < 12){
	console.log('Good morning!');
}else if(hour >= 12 && hour < 17){
	console.log('Good afternoon!');
}else{
	console.log('Good night!');
}

//6c

const name = 'Jefferson'

//using quotes
if(hour >= 6 && hour < 12){
	console.log('Good morning, ' + name + '!');
}else if(hour >= 12 && hour < 17){
	console.log('Good afternoon, ' + name + '!');
}else{
	console.log('Good night, ' + name + '!');
}

//using template strings, interpolation, backticks and changing the hour

hour = 15;

if(hour >= 6 && hour < 12){
	console.log(`Good morning, ${name}!`);
}else if(hour >= 12 && hour < 17){
	console.log(`Good afternoon, ${name}!`);
}else{
	console.log(`Good night, ${name}!`);
}

//6d

let age = 15;

if(age < 6 || age >= 65){
	console.log('Discount!');
}else{
	console.log('No discount!');
}

//changing the age to see different messages;

age = 4;

if(age < 6 || age >= 65){
	console.log('Discount!');
}else{
	console.log('No discount!');
}

age = 84;

if(age < 6 || age >= 65){
	console.log('Discount!');
}else{
	console.log('No discount!');
}

//6e

let isHolyday = true;

age = 15;

if((age < 6 || age >= 65) && isHolyday){
	console.log('Discount!');
}else{
	console.log('No discount!');
}

age = 4;

if((age < 6 || age >= 65) && isHolyday){
	console.log('Discount!');
}else{
	console.log('No discount!');
}

age = 84;

if((age < 6 || age >= 65) && isHolyday){
	console.log('Discount!');
}else{
	console.log('No discount!');
}

isHolyday = false;

age = 15;

if((age < 6 || age >= 65) && isHolyday){
	console.log('Discount!');
}else{
	console.log('No discount!');
}

age = 4;

if((age < 6 || age >= 65) && isHolyday){
	console.log('Discount!');
}else{
	console.log('No discount!');
}

age = 84;

if((age < 6 || age >= 65) && isHolyday){
	console.log('Discount!');
}else{
	console.log('No discount!');
}

//6f

const number = Math.random();

console.log(number);


//6g

if(number < 0.5){
	console.log('heads');
}else{
	console.log('tails');
}

//6h

let result;

if(number < 0.5){
	result = 'heads';
}else{
	result = 'tails';
}

//6i

const guess = 'heads';

if(guess === result){
	console.log('You win!');
}else{
	console.log('You lose!');
}

//6j - Ternary

const message = guess === result ? 'You win!' : 'You lose!';
console.log(message);




//Challenges - Improving Cart

//6j

let cartQuantity = 0;