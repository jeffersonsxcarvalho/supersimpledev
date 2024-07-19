export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantityValue: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantityValue: 1
}, {
  productId: '8c9c52b5-5a19-4bcb-a5d1-158a74287c53',
  quantityValue: 3
}];

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
            quantityValue
          });    
        }
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
  return cart;
}