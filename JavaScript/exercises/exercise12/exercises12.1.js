//12a

console.log('12.1a');

let add = function add1() {
	console.log('sum is ' + (2+3));
}

add();

add();

//12b

console.log('12b - title');

function runTwice(func) {
	func();
	func();	
}

runTwice(function() {console.log('12b');});

runTwice(function add1() {
	console.log('sum is ' + (2+3));
})

//runTwice(add());

//12c

console.log('12c');

const btn = document.querySelector('.btn12c');


function btnToFinished() {
	const btn = document.querySelector('.btn12c');

	btn.innerHTML = 'Finished';
}

//setTimeout(btnToFinished(), 2000);

//12d

console.log('12d');



function btnToFinished2() {
	const btn = document.querySelector('.btn12d');

	btn.innerHTML = 'Finished';
}

function btnToLoading() {
	const btn = document.querySelector('.btn12d');
	btn.innerHTML = 'Loading...';
}

//12e

console.log('12e');



function addMessage() {
	const par12e = document.querySelector('.par12e');

	par12e.innerHTML = 'Added';	
}

function removeMessage() {

	const par12e = document.querySelector('.par12e');

	par12e.innerHTML = '';
}



//12f

console.log('12f');

//let isAppearing = false;

function removeMessage2() {
		
	const par12f = document.querySelector('.par12f');

	par12f.innerHTML = '';
}

function removeMsgTimeoutId(){
		const timeoutId = setTimeout(removeMessage2, 2000);
		return timeoutId;		
}

function stopTimoutRemoveMsg(timeoutId){
	clearTimeout(timeoutId);
}



let timeoutId;

function appearAndDisappearMsg() {

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


function titleChange1() {

	if(document.title === 'App'){
		document.title = '(2) New messages';
	}else{
		document.title = 'App';
	}
}

function setInt(fun, time) {
	const intervalId = setInterval(fun, time);
	return intervalId;
}

function clearInt(intervalId){
	if(intervalId){
		clearInterval(intervalId);
	}
}

let intervalId;

function titleChangeG(){

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

function titleChangeH(num){


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

function titleChangeI(num){


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
	


	



