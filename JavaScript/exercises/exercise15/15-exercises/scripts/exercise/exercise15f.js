import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export default function isWeekend(date) {
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
}