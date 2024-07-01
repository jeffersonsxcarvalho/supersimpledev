const pShipping = document.querySelector('p.shipping');
const aShipping = document.querySelector('a p.shipping');

function changeTextShipping (){
	if(pShipping.innerHTML === 'Frete'){
		pShipping.innerHTML = 'Grátis';
	}else{
		pShipping.innerHTML = 'Frete'
	}

	if(aShipping.innerHTML === 'Frete'){
		aShipping.innerHTML = 'Grátis';
	}else{
		aShipping.innerHTML = 'Frete'
	}
}

setInterval(changeTextShipping, 1000);