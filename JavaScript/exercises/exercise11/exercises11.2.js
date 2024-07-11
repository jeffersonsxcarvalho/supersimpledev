//11o

console.log('Exercise - 11o');

const strArr = ['hello', 'world', 'home', 'search', 'cup']; //3

const strArr2 = ['search', 'hello', 'world', 'home', 'cup'];//0

const strArr3 = ['searching', 'hello', 'world', 'home', 'cup'];//-1


//strArr

let index = -1;

for(let i = 0; i < strArr.length; i++){
	if(strArr[i] === 'search'){
		index = i;
	}
}

console.log(index);

//strArr2

index = -1;

for(let i = 0; i < strArr2.length; i++){
	if(strArr2[i] === 'search'){
		index = i;
	}
}

console.log(index);

//strArr3

index = -1;

for(let i = 0; i < strArr3.length; i++){
	if(strArr3[i] === 'search'){
		index = i;
	}
}

console.log(index);


//11p

console.log('Exercise - 11p');


const strArr4 = ['hello', 'world', 'home', 'search', 'cup', 'search']; //3

const strArr5 = ['hello', 'world', 'search', 'home', 'cup', 'search'];//2

const strArr6 = ['searching', 'hello', 'world', 'home', 'cup'];//-1

//strArr4

index = -1;

for(let i = 0; i < strArr4.length; i++){
	if(strArr4[i] === 'search'){
		index = i;
		break;
	}
}

console.log(index);

//strArr2

index = -1;

for(let i = 0; i < strArr5.length; i++){
	if(strArr5[i] === 'search'){
		index = i;
		break;
	}
}

console.log(index);

//strArr3

index = -1;

for(let i = 0; i < strArr6.length; i++){
	if(strArr6[i] === 'search'){
		index = i;
		break;
	}
}

console.log(index);


//11q

console.log('Exercise - 11q');

function findIndex(array, word) {
	let index = -1;

	for(let i = 0; i < array.length; i++){
		if(array[i] === word){
			index = i;
			break;
		}
	}

	console.log(`The index of the word ${word} in the array is: ${index}`);
}

findIndex(strArr, 'search');
findIndex(strArr2, 'search');
findIndex(strArr3, 'search');
findIndex(strArr4, 'search');
findIndex(strArr5, 'search');
findIndex(strArr6, 'search');

findIndex(['green', 'red', 'blue', 'red'], 'red');
findIndex(['green', 'red', 'blue', 'red'], 'yellow');


//11r

console.log('Exercise - 11r');

function removeEgg(array) {
	let newArray = [];

	for(let i = 0; i < array.length; i++) {
		if(array[i] === 'egg'){
			continue;
		}else{
			newArray.push(array[i]);
		}		
	}
	console.log(newArray);
}

removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']);


//11s

console.log('Exercise - 11s');


function removeEgg2(array) {
	let newArray = [];
	let count = 0;

	for(let i = 0; i < array.length; i++) {
		if(array[i] === 'egg' && count < 2){
			count++;
			continue;		
		}else{
			newArray.push(array[i]);
		}		
	}
	console.log(newArray);
}

removeEgg2(['egg', 'apple', 'egg', 'egg', 'ham']);


//11t

console.log('Exercise - 11t');


function removeEgg3(array) {
	let revArr = array.reverse();
	let newArray = [];
	let count = 0;

	for(let i = 0; i < revArr.length; i++) {
		if(revArr[i] === 'egg' && count < 2){
			count++;
			continue;		
		}else{
			newArray.push(array[i]);
		}		
	}
	console.log(newArray.reverse());
}

removeEgg3(['egg', 'apple', 'egg', 'egg', 'ham']);

//11u

console.log('Exercise - 11u');


function removeEgg3(array) {
	let revArr = array.slice();
	revArr = revArr.reverse();
	let newArray = [];
	let count = 0;

	for(let i = 0; i < revArr.length; i++) {
		if(revArr[i] === 'egg' && count < 2){
			count++;
			continue;		
		}else{
			newArray.push(revArr[i]);
		}		
	}
	console.log(array)
	console.log(newArray.reverse());

}

removeEgg3(['egg', 'apple', 'egg', 'egg', 'ham']);

//11v

console.log('Exercise - 11v');

for(let i = 1; i <= 20; i++) {
	if(i % 3 === 0 && i % 5 ===0){
		console.log('FizzBuzz');
	}else if(i % 3 === 0){
		console.log('Fizz');
	}else if(i % 5 === 0){
		console.log('Buzz');
	}else{
		console.log(i);
	}
}


//11w - Copy of 11q

console.log('Exercise - 11w');

function findIndex(array, word) {
	let index = -1;

	for(let i = 0; i < array.length; i++){
		if(array[i] === word){
			index = i;
			break;
		}
	}

	//console.log(`The index of the word ${word} in the array is: ${index}`);
	return index;
}


/*findIndex(strArr, 'search');
findIndex(strArr2, 'search');
findIndex(strArr3, 'search');
findIndex(strArr4, 'search');
findIndex(strArr5, 'search');
findIndex(strArr6, 'search');

findIndex(['green', 'red', 'blue', 'red'], 'red');
findIndex(['green', 'red', 'blue', 'red'], 'yellow');*/


//starting 11w

//Não consegui ainda

function unique(array) {
	let newArray = [];
	let indexes = [];


	for (let i = 0; i < array.length; i++) {
		indexes.push(findIndex(array, array[i]));
	}



	//return newArray;

	console.log(newArray);
}

unique(['green', 'red', 'blue', 'red']);

unique(['red', 'green', 'green', 'red']);

console.log('VOLTAR PARA FAZER!!')