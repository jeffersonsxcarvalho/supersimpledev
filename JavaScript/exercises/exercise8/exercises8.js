//8a

const bktb = {
	name: 'basketball',
	price: 2095
};

console.log(bktb);

//8b

bktb.price += 500;

console.log(bktb);

//8c

bktb['delivery-time'] = '3 days';

console.log(bktb);

//8d

const chair = {
	name: 'Chair',
	price: 150000
}

const celphone = {
	name: 'Celphone',
	price: 150000
}

function comparePrice(product1, product2){
	if(product1.price === product2.price){
		return 'Price is the same';
	}else if(product1.price < product2.price){
		return product1;
	}else{
		return product2;
	}
}

console.log(comparePrice(chair, celphone));

//8e


const chair2 = {
	name: 'Chair',
	price: 150000
};

const chair3 = chair;

//Comparing References

function isSameProductRef(product1, product2){
	if(product1 === product2){
		return true;
	}else{
		return false;
	}
}

console.log(isSameProductRef(chair, chair2));
console.log(isSameProductRef(chair, chair3));
console.log(isSameProductRef(chair, chair));

//Comparing product properties and values

function isSameProduct(product1, product2){
	if(product1.name === product2.name && product1.price === product2.price){
		return true;
	}else{
		return false;
	}
}

console.log(isSameProduct(chair, chair2));
console.log(isSameProduct(chair, chair3));
console.log(isSameProduct(chair, chair));


//8f

const greet = 'Good morning!';

console.log(greet);
console.log(greet.toLowerCase());

//8g

const str = 'test';

console.log(str.repeat(3));
console.log(greet.repeat(2));

//8h

//Copy of 7j

//7j - copy of 5r


//let result = 0;

let calculation = '';

let p1 = document.querySelector('.js-result');
let p2 = document.querySelector('.js-calculation');


function showResult(result){
	p1.innerHTML = 'Resultado: <span class="res">' + result + '</span>';
}

function showCalc(calculation){
	p2.innerHTML = 'Cálculo: <span class="calc">' + calc.replace('*', 'x') + '<span>';
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

let calc = localStorage.getItem('calculation') || '';

showCalc(calc);



function updateCalculation(char) {
	if(char !== ''){
		calc += char;

	}else{
		calc = char;
	}

	localStorage.setItem('calculation', calc);

	console.log(localStorage.calculation);
 
	showCalc(calc);
	
}


console.log(calculation);


//8i

//6h - Needed by 6i

let number = 0;

let result;

if(number < 0.5){
	result = 'heads';
}else{
	result = 'tails';
}

//6i - needed by 6j

const guess = 'heads';

/*if(guess === result){
	console.log('You win!');
}else{
	console.log('You lose!');
}*/

//copy of 6j - Ternary - Needed 6i above

//8i-b improving the flip coing game

		//8k
		let score = {
			wins: 0,
			losses: 0
		}

		localStorage.setItem('score', JSON.stringify(score));


function playGame(guess){

	let number = Math.random();

	let result;

	if(number < 0.5){
		result = 'heads';
	}else{
		result = 'tails';
	}

	const message = guess === result ? 'You win!' : 'You lose!';
	console.log(message);

	//8j 
	if(message === 'You win!'){
		score.wins += 1;
	}else if(message === 'You lose!'){
		score.losses += 1;
	}

	p.innerHTML = `Wins: ${score.wins} <br> Losses: ${score.losses}`;

	localStorage.setItem('score', JSON.stringify(score));


}


//8j

/*let score = {
	wins: 0,
	losses: 0
}*/



let p = document.querySelector('.score');

const scorels = localStorage.getItem('score');

p.innerHTML = `Wins: ${scorels.wins} <br> Losses: ${scorels.losses}` || `Wins: <br> Losses:`;



//8k

//localStorage.setItem('score', JSON.stringify(score));






