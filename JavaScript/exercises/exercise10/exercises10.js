//10c

let btn4 = document.querySelector('.btn4');

let result = btn4.classList.contains('js-button')

console.log(result);



//10d

const btn5 = document.querySelector('.btn5');

function toggle0() {
	if(btn5.classList.contains('is-toggled')){
		btn5.classList.remove('is-toggled');
	}else{
		btn5.classList.add('is-toggled');
	}
}

//10e


function toggle(btnx) {
	const btn = document.querySelector(btnx);
	if(btn.classList.contains('is-toggled')){
		btn.classList.remove('is-toggled');
	}else{
		btn.classList.add('is-toggled');
	}
}

//10f - Have done already

//10g

function toggle2(btnx) {
	const btn9 = document.querySelector('.btn9');
	const btn10 = document.querySelector('.btn10');
	const btn11 = document.querySelector('.btn11');

	if(btnx === '.btn9'){
		if(btn9.classList.contains('is-toggled')){
			btn9.classList.remove('is-toggled');
		}else{
			btn9.classList.add('is-toggled');
			btn10.classList.remove('is-toggled');
			btn11.classList.remove('is-toggled');
		}
	}else if(btnx === '.btn10'){
		if(btn10.classList.contains('is-toggled')){
			btn10.classList.remove('is-toggled');
		}else{
			btn10.classList.add('is-toggled');
			btn9.classList.remove('is-toggled');
			btn11.classList.remove('is-toggled');
		}
	}else if(btnx === '.btn11'){
		if(btn11.classList.contains('is-toggled')){
			btn11.classList.remove('is-toggled');
		}else{
			btn11.classList.add('is-toggled');
			btn9.classList.remove('is-toggled');
			btn10.classList.remove('is-toggled');
		}
	}
}

//Above I didn't use array or something, just if stmts.



//using array in a very simple way, not doing loop (didn't study arrays yet)

function toggle3(btnx) {
	const btn = document.querySelector(btnx);
	const btns = document.querySelectorAll('.group1');

	if(btn.classList.contains('is-toggled')){
		btn.classList.remove('is-toggled');
	}else{
		btns[0].classList.remove('is-toggled');
		btns[1].classList.remove('is-toggled');
		btns[2].classList.remove('is-toggled');
		btn.classList.add('is-toggled');
	}
}


//10h - Copy of the 10-dom-project

  /*String(25)
      console.log('25' - 5);
      console.log('25' + 5);

      window.document
      window.console.log('window');
      window.alert*/

      function handleCostKeydown(event) {
        if (event.key === 'Enter') {
          calculateTotal();
        }
      }

      function calculateTotal() {
        const inputElement = document.querySelector('.js-cost-input');
        const msg = document.querySelector('.js-total-cost')
        msg.style.color = 'black';
        let cost = Number(inputElement.value);

        if(cost < 0) {
        	//msg.innerHTML.style.color = 'red';
        	cost = 'Error: cost cannot be less than $0';
        	msg.style.color = 'red';
        }else if (cost < 40) {
          cost = cost + 10;
        }else{
        	cost = cost;
        }
        
          msg.innerHTML = `${cost}`;
      }

      function subscribe() {
        const buttonElement = document.querySelector('.js-subscribe-button');

        if (buttonElement.innerText === 'Subscribe') {
          buttonElement.innerHTML = 'Subscribed';
          buttonElement.classList.add('is-subscribed');
        } else {
          buttonElement.innerHTML = 'Subscribe';
          buttonElement.classList.remove('is-subscribed');
        }
      }


//10i - copy of 9j

      //9j


//Copy of

//8h

//Copy of 7j

//7j - copy of 5r


//let result = 0;

let calculation = '';

//let p1 = document.querySelector('.js-result');
let p2 = document.querySelector('.js-calculation');


function showResult(result){
	p2.innerHTML = '<span class="res">' + result + '</span>';
	localStorage.setItem('calculation', result);
}

function showCalc(calculation){
	p2.innerHTML = '<span class="calc">' + calc.replace('*', 'x') + '<span>';
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
