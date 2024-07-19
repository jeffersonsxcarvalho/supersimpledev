export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantityValue: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantityValue: 1
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