import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

//14 - We can rename this variable with modules like
//import {cart as myCart} from '../data/cart.js';


let productsHTML = '';

products.forEach((product) => {
	productsHTML += `
		<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <!-- 13a found the element, 13b - put the product.id in the select class --> 
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <!--C.E.13i - Added a unique class using the product id-->
          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>

    `;
}); 

document.querySelector('.js-products-grid').innerHTML = productsHTML;

//C. E. 13m
let timeoutAddCart; 

//13m - Extra. There was a problem, 13m was working well, the problem is that when I click add to cart 
//in other product it cancels the timeout of the other, so 'added' won't disappear in the other products.
let prevProductId;

//C.E. 13l
function removeClass(elem, cl) {
  elem.classList.remove(cl);
}


//14 - separate the code in a function

function addedDisappear(productId, addedToCart) {
    //13m - Extra (I did it, wanna see the old code, go to class 13 page)

      if(!timeoutAddCart){
        timeoutAddCart = setTimeout(() => {
          removeClass(addedToCart, 'opacity1');
        }, 2000);
        prevProductId = productId;
      }else if(timeoutAddCart && prevProductId !== productId){
        timeoutAddCart = setTimeout(() => {
          removeClass(addedToCart, 'opacity1');
        }, 2000);
        prevProductId = productId;
      }else if(timeoutAddCart && prevProductId === productId){
          clearTimeout(timeoutAddCart);
          timeoutAddCart = setTimeout(() => {
          removeClass(addedToCart, 'opacity1');
        }, 2000);
      }
}

function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      //13g
        cartQuantity += cartItem.quantityValue;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}


document.querySelectorAll('.js-add-to-cart-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      //13h
      const {productId} = button.dataset;

      //Commented by 13h [ const productId = button.dataset.productId; ]

      //13c
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

      //13d
      const quantityValue = Number(quantitySelector.value);

      //C.E. 13j
      const addedToCart = document.querySelector(`.js-added-to-cart-${productId}`);

      //C.E. 13k

      addedToCart.classList.add('opacity1');

      addedDisappear(productId, addedToCart);

      addToCart(productId, quantityValue);

      updateCartQuantity();

    })
  });

//12f

  console.log('12f - chose other quantity and will commit here');