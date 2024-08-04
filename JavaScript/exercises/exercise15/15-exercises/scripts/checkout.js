import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';

//exercise 15F
import isWeekend from './exercise/exercise15f.js';

//exercise 15G
import {isWeekend2 as isSatSun} from './exercise/exercise15g.js';

//exercise 15A
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



console.log('EXERCISE 15A---')

const todayA = dayjs();

//console.log(todayA);

const day5A = todayA.add(5, 'days') 

//console.log(day5A);

const dateStringA = day5A.format('MMMM DD');

console.log(dateStringA);

//exercise 15B

console.log('EXERCISE 15B---')

const todayB = dayjs();

//console.log(todayB);

const dayB = todayB.add(1, 'month') 

//console.log(dayB);

const dateStringB = dayB.format('MMMM DD');

console.log(dateStringB);

//exercise 15C

console.log('EXERCISE 15C---')

const todayC = dayjs();

//console.log(todayC);

const dayC = todayC.subtract(1, 'month') 

//console.log(dayC);

const dateStringC = dayC.format('MMMM DD');

console.log(dateStringC);

//exercise 15D

console.log('EXERCISE 15D---');

const dateD = dayjs('1993-09-08');


const dateStringD = dateD.format('dddd');
console.log(dateStringD);

//exercise 15E

console.log('EXERCISE 15E---');

//function moved to exercise/exercise15f.js by exercise 15f and I am using it as module. 

/*function isWeekend(date) {
	let message;
	
	const dayE = dayjs(date);

	const dateStringE = dayE.format('dddd');
	
	//console.log(dateStringE);

	if(dateStringE === 'Sunday') {
		message = `The date ${date} is Sunday.`;
	}else if(dateStringE === 'Saturday'){
		message = `The date ${date} is Saturday.`
	}else {
		message = `The date ${date} is not a weekend day.`
	}

	console.log(message);
}*/

isWeekend('1993-09-08');

isWeekend('1993-09-12');

isWeekend('1993-09-13');


isWeekend('2024-08-04');


//exercise 15G

console.log('EXERCISE 15G')

isSatSun('1993-09-08');

isSatSun('1993-09-12');

isSatSun('1993-09-13');


isSatSun('2024-08-04');



//______________________________________________________________________________________

renderOrderSummary();
renderPaymentSummary();

