export const cart = [];

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