import {cart, removeFromCart, calculateCartQuantity, updateQuantity} from '../data/cart.js';
import {products} from '../data/products.js';
// 14b my solution commented by 14e import {updateCartQuantity} from './utils/cart-quantity.js';
import {formatCurrency} from './utils/money.js';



//function generateCartSummary() {

	let cartSummaryHTML = '';


	cart.forEach((cartItem) => {
		const productId = cartItem.productId;

		let matchingProduct;

		products.forEach((product) => {
			if(productId === product.id){
				matchingProduct = product;
			}
		});

		cartSummaryHTML +=	`
		  <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
	        <div class="delivery-date">
	          Delivery date: Tuesday, June 21
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
	            <div class="product-quantity">
	              <span>
	                Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantityValue}</span>
	              </span>
	              <span class="update-quantity-link link-primary js-update-quantity-link" data-product-id="${matchingProduct.id}">
	                Update
	              </span>
	              <input class="quantity-input js-quantity-input-${matchingProduct.id}">
	              <span class="save-quantity-link link-primary js-save-quantity-link" data-product-id="${matchingProduct.id}">Save</span>
	              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
	                Delete
	              </span>
	            </div>
	          </div>

	          <div class="delivery-options">
	            <div class="delivery-options-title">
	              Choose a delivery option:
	            </div>
	            <div class="delivery-option">
	              <input type="radio" checked
	                class="delivery-option-input"
	                name="delivery-option-${matchingProduct.id}">
	              <div>
	                <div class="delivery-option-date">
	                  Tuesday, June 21
	                </div>
	                <div class="delivery-option-price">
	                  FREE Shipping
	                </div>
	              </div>
	            </div>
	            <div class="delivery-option">
	              <input type="radio"
	                class="delivery-option-input"
	                name="delivery-option-${matchingProduct.id}">
	              <div>
	                <div class="delivery-option-date">
	                  Wednesday, June 15
	                </div>
	                <div class="delivery-option-price">
	                  $4.99 - Shipping
	                </div>
	              </div>
	            </div>
	            <div class="delivery-option">
	              <input type="radio"
	                class="delivery-option-input"
	                name="delivery-option-${matchingProduct.id}">
	              <div>
	                <div class="delivery-option-date">
	                  Monday, June 13
	                </div>
	                <div class="delivery-option-price">
	                  $9.99 - Shipping
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>  	  
		`;
	});	

	document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
//}

//generateCartSummary();


document.querySelectorAll('.js-delete-link').forEach((link) => {
	link.addEventListener('click', () => {
		const productId = link.dataset.productId;
		removeFromCart(productId);
		//generateCartSummary(); I created this function
		const container = document.querySelector(`
			.js-cart-item-container-${productId}
			`
		);
		container.remove();
		//14c
		//commented by 14e updateCartQuantity(cart, '.js-return-to-home-link');

		//14e
calculateCartQuantity(cart, '.js-return-to-home-link');
	})
});

//14b
//commented by 14e updateCartQuantity(cart, '.js-return-to-home-link');

//14e
calculateCartQuantity(cart, '.js-return-to-home-link')
    


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

document.querySelectorAll('.js-save-quantity-link').forEach((link) => {
	link.addEventListener('click', () => {
		const productId = link.dataset.productId;
		
		document.querySelector(`.js-cart-item-container-${productId}`).classList.remove('is-editing-quantity');

		//14k - Adicionei as classes no html para poder trazer esses elementos.
		const newQuantity = Number(document.querySelector(`.js-quantity-input-${productId}`).value);

		//14l
		updateQuantity(productId, newQuantity);

		//14m
		document.querySelector(`.js-quantity-label-${productId}`).innerHTML = newQuantity;

		calculateCartQuantity(cart, '.js-return-to-home-link')
	})
});

