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

