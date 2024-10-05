export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

  if(!cart){
    cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantityValue: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantityValue: 1,
      deliveryOptionId: '2'
    }];
  }
}


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId, quantityValue) {
  let matchingItem;

      cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
          matchingItem = cartItem;
        }
      });

        if(matchingItem){
           matchingItem.quantityValue += quantityValue;
        }else{
          cart.push({
            productId, 
            quantityValue,
            deliveryOptionId: '1'
          });    
        }

  saveToStorage();
}

//Tried to create the function here, didn't work

export function removeFromCart(productId) {
  let newCart = [];

  cart.forEach((cartItem) => {
    if(productId !== cartItem.productId /*&& cart.length > 1*/){
      newCart.push(cartItem);
    }/*else if(cart.length === 1){
      newCart = [];
    }*/
  });

  cart = newCart;
  
  saveToStorage();
}

//14e

export function calculateCartQuantity(cart, selector) {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      //13g
        cartQuantity += cartItem.quantityValue;
    });

    document.querySelector(selector).innerHTML = cartQuantity;
}

//14l

export function updateQuantity(productId, newQuantity) {

  cart.forEach((cartItem) => {
    if(cartItem.productId === productId) {
      cartItem.quantityValue = newQuantity;
    }
  });

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
  
}