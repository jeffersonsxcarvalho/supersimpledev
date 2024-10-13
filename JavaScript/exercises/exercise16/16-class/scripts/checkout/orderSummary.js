import {cart, removeFromCart, calculateCartQuantity, updateQuantity, updateDeliveryOption} from '../../data/cart.js';
import {products, getProduct} from '../../data/products.js';
// 14b my solution commented by 14e import {updateCartQuantity} from './utils/cart-quantity.js';
import {formatCurrency} from '../utils/money.js';

//Class 15 

import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';

import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

//15l - created the function calculate deliveryDate and used here
import {deliveryOptions, getDeliveryOption, calculateDeliveryDate} from '../../data/deliveryOptions.js';

import {renderPaymentSummary} from './paymentSummary.js'

//note that modules should be the esm version (esm - EcmaScript modules)

//15J
import {renderCheckoutHeader} from './checkoutHeader.js';


export function renderOrderSummary() {



	let cartSummaryHTML = '';


	cart.forEach((cartItem) => {
	    const productId = cartItem.productId;

		const matchingProduct = getProduct(productId);

		//class 15

		const deliveryOptionId = cartItem.deliveryOptionId;

		const deliveryOption = getDeliveryOption(deliveryOptionId);


		
		

		cartSummaryHTML +=	`
		  <div class="cart-item-container
		  	js-cart-item-container
		  	js-cart-item-container-${matchingProduct.id}">
	        <div class="delivery-date">
	          Delivery date: ${calculateDeliveryDate(deliveryOption)}
	        </div>

	        <div class="cart-item-details-grid">
	          <img class="product-image"
	            src="${matchingProduct.image}">

	          <div class="cart-item-details">
	            <div class="product-name">
	              ${matchingProduct.name}
	            </div>
	            <div class="product-price">
	              $${formatCurrency(matchingProduct.priceCents)}
	            </div>
	            <div class="product-quantity js-product-quantity-${matchingProduct.id}">
	              <span>
	                Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantityValue}</span>
	              </span>
	              <span class="update-quantity-link link-primary js-update-quantity-link" data-product-id="${matchingProduct.id}">
	                Update
	              </span>
	              <input class="quantity-input js-quantity-input-${matchingProduct.id}" value="${cartItem.quantityValue}">
	              <span class="save-quantity-link link-primary js-save-quantity-link" data-product-id="${matchingProduct.id}">Save</span>
	              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
	                Delete
	              </span>
	              <!--14n I added-->
	              <p class="validate-quantity-input js-validate-quantity-${matchingProduct.id}"></p>
	            </div>
	          </div>

	          <div class="delivery-options">
	            <div class="delivery-options-title">
	              Choose a delivery option:
	            </div>
	            ${deliveryOptionsHTML(matchingProduct, cartItem)}
	          </div>
	        </div>
	      </div>  	  
		`;
	});	


	//class 15
	function deliveryOptionsHTML(matchingProduct, cartItem) {
		let html = '';

		deliveryOptions.forEach((deliveryOption) => {

			const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} -`;

			const isChecked = (deliveryOption.id === cartItem.deliveryOptionId);

			html += `
				<div class="delivery-option js-delivery-option"
				data-product-id="${matchingProduct.id}"
				data-delivery-option-id="${deliveryOption.id}">
		          <input type="radio"
		          	${isChecked ? 'checked' : ''}
		            class="delivery-option-input"
		            name="delivery-option-${matchingProduct.id}">
		          <div>
		            <div class="delivery-option-date">
		              ${calculateDeliveryDate(deliveryOption)}
		            </div>
		            <div class="delivery-option-price">
		              ${priceString} Shipping
		            </div>
		          </div>
		        </div>
	        `;
		})

		return html;
	}



	document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;



	//class 15 it needs to be below the line above, because js needs to have generated before we get these elements

	document.querySelectorAll('.js-delivery-option').forEach(element => {
		element.addEventListener('click', () => {
			//const productId = element.dataset.productId;  ---shorthand below for practice
			const {productId} = element.dataset;
			//const deliveryOptionId = element.dataset.deliveryOptionId
			const {deliveryOptionId} = element.dataset;
			updateDeliveryOption(productId, deliveryOptionId);
			renderOrderSummary();
			renderPaymentSummary();
		});
	})

	document.querySelectorAll('.js-delete-link').forEach((link) => {
		link.addEventListener('click', () => {
			const productId = link.dataset.productId;
			removeFromCart(productId);
			//generateCartSummary(); I created this function
			
			//15h - regenerate html instead o using .delete()
			
			/*const container = document.querySelector(`
				.js-cart-item-container-${productId}
				`
			);
			container.remove();*/

			renderOrderSummary();
			//Fim 15h


			//14c
			//commented by 14e updateCartQuantity(cart, '.js-return-to-home-link');

			//14e
			//Commented by 15J calculateCartQuantity(cart, '.js-return-to-home-link');
			renderCheckoutHeader()

			renderPaymentSummary();
		})
	});




	//14b
	//commented by 14e updateCartQuantity(cart, '.js-return-to-home-link');

	//14e
	//Commented by 15J calculateCartQuantity(cart, '.js-return-to-home-link')
	renderCheckoutHeader()
	    


	//document.querySelector().innerHTML = cart.quantityValue;

	//Challenge Exercises

	//14f

	document.querySelectorAll('.js-update-quantity-link').forEach((link) => {
		link.addEventListener('click', () => {
			const productId = link.dataset.productId;

			//14g
			document.querySelector(`.js-cart-item-container-${productId}`).classList.add('is-editing-quantity');
		})
	});

	//14i está no checkout.css

	//14j

	//14n created a function to use Enter
	function saveQuantity(link) {
		
			const productId = link.dataset.productId;

			//14k - Adicionei as classes no html para poder trazer esses elementos.
			const newQuantity = Number(document.querySelector(`.js-quantity-input-${productId}`).value);

			//14n
			const validationMessage = document.querySelector(`.js-validate-quantity-${productId}`);

			//14n 'added this "if-else" to validate the input value'

			if(newQuantity > 0 && newQuantity <= 1000){

				
				document.querySelector(`.js-cart-item-container-${productId}`).classList.remove('is-editing-quantity');

				//14l
				updateQuantity(productId, newQuantity);

				//14m
				document.querySelector(`.js-quantity-label-${productId}`).innerHTML = newQuantity;

				//Commented by 15j calculateCartQuantity(cart, '.js-return-to-home-link');	
				renderCheckoutHeader();

				//14n
				validationMessage.innerHTML = '';
			}else{
				//14n
				validationMessage.innerHTML = 'Valor invalido!';
			}
		
	}

	document.querySelectorAll('.js-save-quantity-link').forEach((link) => {
		link.addEventListener('click', () => {
			saveQuantity(link);
			renderPaymentSummary();
		});

		//14n - Evento de teclado usar Enter para salvar.

		document.body.addEventListener('keydown', (event) => {
			if(event.key === 'Enter'){
				saveQuantity(link);
				renderPaymentSummary();
			}
		});
		
	});

}


