import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

import {isWeekend, countWeekendDays} from '../scripts/utils/date.js';

export function getDeliveryOption(deliveryOptionId) {
	let deliveryOption;

	deliveryOptions.forEach(option => {
		if(option.id === deliveryOptionId){
			deliveryOption = option;
		}
	});

	return deliveryOption || deliveryOptions[0];
}

//Exercise 15l
export function calculateDeliveryDate(deliveryOption) {
	const today = dayjs();

	let deliveryTmpDate = today.add(
		deliveryOption.deliveryDays,
		'days'
	);

//exercise 15m
	let deliveryDate = deliveryTmpDate.add(countWeekendDays(deliveryTmpDate), 'days');
	

	const dateString = deliveryDate.format(
		'dddd, MMMM D'
	);

	return dateString;
}

export const deliveryOptions = [{
	id: '1',
	deliveryDays: 7,
	priceCents: 0 
}, {
	id: '2',
	deliveryDays: 3,
	priceCents: 499
},{
	id: '3',
	deliveryDays: 1,
	priceCents: 999
}];

