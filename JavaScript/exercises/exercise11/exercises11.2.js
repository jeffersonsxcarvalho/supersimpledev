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
