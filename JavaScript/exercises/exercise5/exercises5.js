//5a
const name = 'Jefferson';

//5b
console.log('My name is: ' + name);
console.log("My name is: " + name);
console.log(`My name is: ${name}`);

//5c
const cost = 1 * 5 + 2 * 3 + 1 * 9;

//5d
console.log('Cost of food: R$' + cost);
console.log("Cost of food: R$" + cost);
console.log(`Cost of food: R$${cost}`);

//5e
const tax = cost * 0.1;

//5f
console.log('Tax (10%): R$' + tax);
console.log("Tax (10%): R$" + tax);
console.log(`Tax (10%): R$${tax}`);

//5g
const totalCost = cost + tax;
console.log('Total cost: R$' + totalCost);
console.log("Total cost: R$" + totalCost);
console.log(`Total cost: R$${totalCost}`);

//5h, 5i, 5j, 5k
let cartQuantity = 0;

//5n
let calculation = '';

//5r
//let result = 0;

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






