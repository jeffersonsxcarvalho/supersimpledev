//9a

const btn = document.querySelector('button');

console.log(btn);


//9b

const btn2 = document.querySelector('.js-b');

console.log(btn2);

btn2.innerHTML = '9b done!';


//9c

const btnHeads = document.querySelector('.js-heads');

const btnTails = document.querySelector('.js-tails');

const paragC = document.querySelector('.js-pc');

function checkClick(choice){
	if(choice === 'heads'){
		paragC.innerHTML = 'You chose: heads';
	}else if(choice === 'tails'){
		paragC.innerHTML = 'You chose: tails';
	}
}


//9d

const inputName = document.querySelector('.js-name');

const btnSumit = document.querySelector('.js-submit');

const paragName = document.querySelector('.js-pName');

function messageName(){
	paragName.innerHTML = `Your name is: ${inputName.value}`;
}

//9e

//I put an if statem. inside onclick in input elem.

//9f

function messageName(){
	if(event.key === 'Enter' || event.button === 0){
		paragName.innerHTML = `Your name is: ${inputName.value}`;
	}
	
}


//9g

String(25)
      console.log('25' - 5);
      console.log('25' + 5);

      window.document
      window.console.log('window');
      window.alert

      function handleCostKeydown(event) {
        if (event.key === 'Enter') {
          calculateTotal();
        }
      }

      function calculateTotal() {
        const inputElement = document.querySelector('.js-cost-input');
        let cost = Number(inputElement.value);

        if (cost < 40) {
        //cost = cost + 10;
        //Correction for 9g
          cost = (cost + 10).toFixed(2);
        }else{
        	cost = cost.toFixed(2);
        }

        document.querySelector('.js-total-cost')
          .innerHTML = `$${cost}`;
      }

      function subscribe() {
        const buttonElement = document.querySelector('.js-subscribe-button');

        if (buttonElement.innerText === 'Subscribe') {
          buttonElement.innerHTML = 'Subscribed';
        } else {
          buttonElement.innerHTML = 'Subscribe';
        }
      }

//9h

function inputUpdate(){
	const inputUpdate = document.querySelector('.js-input-update');
	const paragUpdate = document.querySelector('.js-pUpdate');

	paragUpdate.innerHTML = inputUpdate.value;
}






//9i - Retry to make 7l (didn't understand)


//9j


//Copy of

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

/*const btn = document.querySelectorAll('div button');

 Try to show the number before it's calculated.

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