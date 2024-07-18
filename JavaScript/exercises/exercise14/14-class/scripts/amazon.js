import {cart} from '../data/cart.js';
import {products} from '../data/products.js';

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
            $${(product.priceCents/100).toFixed(2)}
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

      /*Commented by 13m
      //C.E. 13l
      const timeoutAddCart = setTimeout(() => {
        removeClass(addedToCart, 'opacity1');
      }, 2000);*/

      //Commented by 13m - Extra
      //C. E. 13m - refresh add to cart setTimeout
      /*if(timeoutAddCart){
        clearTimeout(timeoutAddCart);
          timeoutAddCart = setTimeout(() => {
          removeClass(addedToCart, 'opacity1');
        }, 2000);
      }else{
        timeoutAddCart = setTimeout(() => {
          removeClass(addedToCart, 'opacity1');
        }, 2000);
      }*/

      //13m - Extra

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

      //console.log(quantityValue);

      let matchingItem;

      cart.forEach((item) => {
        if(productId === item.productId){
          matchingItem = item;
        }
      });

        if(matchingItem){
          //13g
           matchingItem.quantityValue += quantityValue;
          /*Commented by 13g
          //13e
          matchingItem.quantityValue += quantity
          // Commented by 13e [ matchingItem.quantity += 1; ]
          */
        }else{
          //13h
          cart.push({           

            productId, 

            quantityValue
          });


          //Commented by 13h

          /*cart.push({           

            productId: productId, 

            quantityValue: quantityValue
          });*/



            
          //13e  

          /*cart.push({           

            productId: productId, 

            quantity: quantityValue;

          });*/ 


          //Commented by 13e  

          /*cart.push({           

            productId: productId, 

            quantity: 1;
          });*/    
    
        }

        let cartQuantity = 0;

        cart.forEach((item) => {
          //13g
          cartQuantity += item.quantityValue;
          //commented by 13g  [ cartQuantity += item.quantity; ]
        })

       // console.log(cartQuantity);

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    })
  });

//12f

  console.log('12f - chose other quantity and will commit here');