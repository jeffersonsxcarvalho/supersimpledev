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


	


	



