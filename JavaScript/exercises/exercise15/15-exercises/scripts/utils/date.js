import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function isWeekend(date) {
	let isWeekend;
	
	const dayE = dayjs(date);

	const dateStringE = dayE.format('dddd');
	
	//console.log(dateStringE);

	if(dateStringE === 'Sunday') {
		isWeekend = true;
	}else if(dateStringE === 'Saturday'){
		isWeekend = true;
	}else {
		isWeekend = false;
	}

	return isWeekend;
}


//exercise 15m
export function countWeekendDays(date) {
	let i = 0;

	//const today = dayjs();

	let movingDay = dayjs();

	date = dayjs(date);

	while(movingDay.isBefore(date)){
		movingDay = movingDay.add(1, 'days');

		if(isWeekend(movingDay)){
			i++;
		}
	}

	return i;

}
