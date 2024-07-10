//11a

console.log('Exercise - 11a');

const nums = [10, 20, 30];

nums[2] = 99;

console.log(nums);

//11b

console.log('Exercise - 11b');

function getLastValue(array) {
	const lastValue = array[array.length - 1];
	return lastValue;
}

console.log(getLastValue([1, 20, 22, 24, 5]));

console.log(getLastValue(['hi', 'hello', 'good']));

//11c

console.log('Exercise - 11c');

function arraySwap(array) {
	const first = array[0];
	const last = array[array.length - 1];
	let newArray = array;
	newArray[0] = last;
	newArray[array.length - 1] = first;
	return newArray;
}

console.log(arraySwap([1, 20, 22, 24, 5]));

console.log(arraySwap(['hi', 'hello', 'good']));

//11d

console.log('Exercise - 11d');

for(let i = 0; i <= 10; i += 2){
	console.log(i);
}

//11e

console.log('Exercise - 11e');

for(let i = 5; i >= 0; i--){
	console.log(i);
}

//11f

console.log('Exercise - 11f.1');

i = 0;

while(i <= 10) {
	console.log(i);
	i++;
}

console.log('Exercise - 11f.2');


i=5;

while(i >= 0){
	console.log(i);
	i--;
}

//11g

console.log('Exercise - 11g.1 - Com while loop');

i = 0;

const arrayNormal = [5, 8, 7, 6, 3];
console.log(arrayNormal);
let arrayAdded = [];
let arrayAdded1 = [];


while(i < arrayNormal.length){
	arrayAdded[i] = arrayNormal[i] + 1;
	i++;
}

console.log(arrayAdded);



console.log('Exercise - 11g.1 - with for loop');

for(let i = 0; i < arrayNormal.length; i++){
	arrayAdded1[i] = arrayNormal[i] + 1;
}

console.log(arrayAdded1);



//11h

console.log('Exercise - 11h');


function addOne(array){
	let arrayAdded = [];

	for(let i = 0; i < array.length; i++){
		arrayAdded[i] = array[i] + 1;
	}
	return arrayAdded;
}

console.log([0, 3, 2, 1]);
console.log(addOne([0, 3, 2, 1]));

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));


//11h

console.log('Exercise - 11i');

function addNum(array, num) {
	let newArray = []

	for(let i = 0; i < array.length; i++) {
		newArray[i] = array[i] + num;
	} 

	return newArray;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));


//11j

console.log('Exercise - 11j');

function addArrays(array1, array2) {
	let newArray = [];

	for(let i = 0; i < array1.length; i++){
		newArray[i] = array1[i] + array2[i];
	}
	return newArray;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));

console.log(addArrays([1, 2, 3], [4, 5, 6]));


//11k

console.log('Exercise - 11k');

function countPositive(nums) {
	let count = 0;

	for(let i = 0; i < nums.length; i++){
		if(nums[i] > 0){
			count += 1;
		}
	}

	return count;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));


//11l

console.log('Exercise - 11l');

function minMax(array) {
	let min = array[0];
	let max = array[0];

	for(let i = 0; i < array.length; i++){
		if(array[i] < min) {
			min = array[i]
		}else if(array[i] > max){
			max = array[i];
		}
	}

	return {'min': min, 'max' : max};
}

console.log(minMax([1, -3, 5]));

console.log(minMax([-2, 3, -5, 7, 10]));


//11m

console.log('Exercise - 11m');

function minMax(array) {
	let min = array[0];
	let max = array[0];

	for(let i = 0; i < array.length; i++){
		if(array[i] < min) {
			min = array[i]
		}else if(array[i] > max){
			max = array[i];
		}
	}

	if(min && min === max) {
		return `Minimum and Maximum are ${min}!`;
	}else if(min === undefined || max === undefined){
		return `Array with number missing!`;
	}else{
		return {'min': min, 'max' : max};
	}
}

console.log(minMax([3]));

console.log(minMax([]));

console.log(minMax([1, -3, 5]));

console.log(minMax([-2, 3, -5, 7, 10]));


//11n

console.log('Exercise - 11n');

function countWords(array) {
	let obj = {};

	for(let i = 0; i < array.length; i++){		
		
		if(!obj[array[i]]){
			obj[array[i]] = 0;
		}

		obj[array[i]] += 1;
	}
	
	return obj;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple', 'pear']));


