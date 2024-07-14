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

//12n

console.log('12n');

const removeEggN = (array) => {
	const newArray = array.filter((value) => {
		return value !== 'egg';
	});
	return newArray;
}

console.log(['apple', 'ham', 'egg', 'lettuce']);

console.log(removeEggN(['apple', 'ham', 'egg', 'lettuce']));

//On one line

const removeEggN2 = array => array.filter(value => value !== 'ham');
	
console.log(['apple', 'ham', 'egg', 'lettuce']);

console.log(removeEggN2(['apple', 'ham', 'egg', 'lettuce']));


//12o

console.log('12o');

const removeEggO = (array) => {
	let i = 0;
	const newArray = array.filter((value) => {
		if (i < 2 && value === 'egg'){
			i++;
			return false;
		}else{
			return true;
		}	
	});
	return newArray;
}

console.log(['apple', 'ham', 'egg', 'lettuce']);

console.log(removeEggO(['apple', 'ham', 'egg', 'lettuce']));

console.log(removeEggO(['apple', 'ham', 'egg', 'lettuce', 'egg']));

console.log(removeEggO(['apple', 'ham', 'egg', 'lettuce', 'egg', 'apple', 'pear', 'egg']));

//In one line or simplify

const removeEggO2 = array => {
	let i = 0;
	const newArray = array.filter(value => {
		if(i < 2 && value === 'egg'){
			i++; 
			return false;
		}else{
			return true;
		}
	});   
	return newArray;
}

console.log(['apple', 'ham', 'egg', 'lettuce']);

console.log(removeEggO2(['apple', 'ham', 'egg', 'lettuce']));

console.log(removeEggO2(['apple', 'ham', 'egg', 'lettuce', 'egg']));

console.log(removeEggO2(['apple', 'ham', 'egg', 'lettuce', 'egg', 'apple', 'pear', 'egg']));


//12p

console.log('12p');

//copy of the code from 12c to 12i

			//12c

			console.log('12c');

			const btn = document.querySelector('.btn12c');


			const btnToFinished = () => {
				const btn = document.querySelector('.btn12c');

				btn.innerHTML = 'Finished';
			}

			//setTimeout(btnToFinished(), 2000);

			//12d

			console.log('12d');



			const btnToFinished2 = () => {
				const btn = document.querySelector('.btn12d');

				btn.innerHTML = 'Finished';
			}

			const btnToLoading = () => {
				const btn = document.querySelector('.btn12d');
				btn.innerHTML = 'Loading...';
			}

			//12e

			console.log('12e');



			const addMessage = () => {
				const par12e = document.querySelector('.par12e');

				par12e.innerHTML = 'Added';	
			}

			const removeMessage = () => {

				const par12e = document.querySelector('.par12e');

				par12e.innerHTML = '';
			}



			//12f

			console.log('12f');

			//let isAppearing = false;

			const removeMessage2 = () => {
					
				const par12f = document.querySelector('.par12f');

				par12f.innerHTML = '';
			}

			const removeMsgTimeoutId = () => {
					const timeoutId = setTimeout(removeMessage2, 2000);
					return timeoutId;		
			}

			const stopTimoutRemoveMsg = (timeoutId) => {
				clearTimeout(timeoutId);
			}


			let timeoutId;

			const appearAndDisappearMsg = () => {

				if(!timeoutId){
					timeoutId = removeMsgTimeoutId()
					
					const par12f = document.querySelector('.par12f');

					par12f.innerHTML = 'Added';
				}else{
					stopTimoutRemoveMsg(timeoutId);

					timeoutId = removeMsgTimeoutId()
					
					const par12f = document.querySelector('.par12f');

					par12f.innerHTML = 'Added';
				}
				
			}

			//12g

			console.log('12g');


			const titleChange1 = () => {

				if(document.title === 'App'){
					document.title = '(2) New messages';
				}else{
					document.title = 'App';
				}
			}

			const setInt = (fun, time) => {
				const intervalId = setInterval(fun, time);
				return intervalId;
			}

			const clearInt = (intervalId) => {
				if(intervalId){
					clearInterval(intervalId);
				}
			}

			let intervalId;

			const titleChangeG = () => {

				if(intervalId){
					clearInterval(intervalId);
					intervalId = '';
				}else{
					intervalId = setInterval(titleChange1, 1000);
				}

			}

			//12h

			console.log('12h');


			let intervalIdH;

			let numH = 0;

			const titleChangeH = (num) => {


				if(intervalIdH){
					clearInterval(intervalIdH);
					intervalIdH = '';
				}else{
					numH += num;
					clearInterval(intervalIdH);
					intervalIdH = setInterval(() => {

						if(document.title === 'App'){
							document.title = `(${numH}) New messages`;
						}else{
							document.title = 'App';
						}
					}, 1000);
				}

			}


			//12i

			console.log('12i');


			let intervalIdI;

			let numI = 0;

			const titleChangeI = (num) => {


				if(intervalIdI){
					clearInterval(intervalIdI);
					intervalIdI = '';
				}else if(numI <= 1 && num === -1){
					numI = 0;
					document.title = 'App';
				}else{
					numI += num;
					clearInterval(intervalIdI);
					intervalIdI = setInterval(() => {

						if(document.title === 'App'){
							document.title = `(${numI}) New messages`;
						}else{
							document.title = 'App';
						}
					}, 1000);
				}

			}


//12q

console.log('12q');

//copy of the code from 12c to 12i

			//12c

			console.log('12c');

			const btn2 = document.querySelector('.btn12cQ');


			const btnToFinishedQ = () => btn2.innerHTML = 'Finished';
			

			btn2.addEventListener('click', setTimeout(btnToFinishedQ, 1000));

			//setTimeout(btnToFinished(), 2000);

			//12d

			console.log('12d');


/*
			const btnToFinished2 = () => {
				const btn = document.querySelector('.btn12d');

				btn.innerHTML = 'Finished';
			}

			const btnToLoading = () => {
				const btn = document.querySelector('.btn12d');
				btn.innerHTML = 'Loading...';
			}

			//12e

			console.log('12e');



			const addMessage = () => {
				const par12e = document.querySelector('.par12e');

				par12e.innerHTML = 'Added';	
			}

			const removeMessage = () => {

				const par12e = document.querySelector('.par12e');

				par12e.innerHTML = '';
			}



			//12f

			console.log('12f');

			//let isAppearing = false;

			const removeMessage2 = () => {
					
				const par12f = document.querySelector('.par12f');

				par12f.innerHTML = '';
			}

			const removeMsgTimeoutId = () => {
					const timeoutId = setTimeout(removeMessage2, 2000);
					return timeoutId;		
			}

			const stopTimoutRemoveMsg = (timeoutId) => {
				clearTimeout(timeoutId);
			}


			let timeoutId;

			const appearAndDisappearMsg = () => {

				if(!timeoutId){
					timeoutId = removeMsgTimeoutId()
					
					const par12f = document.querySelector('.par12f');

					par12f.innerHTML = 'Added';
				}else{
					stopTimoutRemoveMsg(timeoutId);

					timeoutId = removeMsgTimeoutId()
					
					const par12f = document.querySelector('.par12f');

					par12f.innerHTML = 'Added';
				}
				
			}

			//12g

			console.log('12g');


			const titleChange1 = () => {

				if(document.title === 'App'){
					document.title = '(2) New messages';
				}else{
					document.title = 'App';
				}
			}

			const setInt = (fun, time) => {
				const intervalId = setInterval(fun, time);
				return intervalId;
			}

			const clearInt = (intervalId) => {
				if(intervalId){
					clearInterval(intervalId);
				}
			}

			let intervalId;

			const titleChangeG = () => {

				if(intervalId){
					clearInterval(intervalId);
					intervalId = '';
				}else{
					intervalId = setInterval(titleChange1, 1000);
				}

			}

			//12h

			console.log('12h');


			let intervalIdH;

			let numH = 0;

			const titleChangeH = (num) => {


				if(intervalIdH){
					clearInterval(intervalIdH);
					intervalIdH = '';
				}else{
					numH += num;
					clearInterval(intervalIdH);
					intervalIdH = setInterval(() => {

						if(document.title === 'App'){
							document.title = `(${numH}) New messages`;
						}else{
							document.title = 'App';
						}
					}, 1000);
				}

			}


			//12i

			console.log('12i');


			let intervalIdI;

			let numI = 0;

			const titleChangeI = (num) => {


				if(intervalIdI){
					clearInterval(intervalIdI);
					intervalIdI = '';
				}else if(numI <= 1 && num === -1){
					numI = 0;
					document.title = 'App';
				}else{
					numI += num;
					clearInterval(intervalIdI);
					intervalIdI = setInterval(() => {

						if(document.title === 'App'){
							document.title = `(${numI}) New messages`;
						}else{
							document.title = 'App';
						}
					}, 1000);
				}

			}*/