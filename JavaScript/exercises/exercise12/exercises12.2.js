//12j

console.log('12j');

let multiply = (num1, num2) => {
	return num1 * num2;
}

console.log(multiply(2, 3));

console.log(multiply(7, 10));

//12k

console.log('12k');

let multiplyOneLine = (num1, num2) => num1 * num2;

console.log(multiplyOneLine(2, 3));

console.log(multiplyOneLine(7, 10));

//12l

console.log('12l');

function countPositive(nums) {
	let i = 0;

	nums.forEach((num) => {
		if(num > 0) {
			i += 1;
		}
	});
	
	console.log(i);

	return i;

}

countPositive([1, -3, 5]);

countPositive([-2, 3, -5, 7, 10]);

//12m

console.log('12m');

const addNum = (array, num) => {
	const newArray = array.map((value) => {
		return value + num;
	})

	return newArray;
}

console.log(addNum([1, 2, 3], 2));

console.log(addNum([-2, -1, 0, 99], 2));

//BONUS

const addNum2 = (array, num) => array.map(value => value + num);
	

console.log(addNum2([1, 2, 3], 2));

console.log(addNum2([-2, -1, 0, 99], 2));

