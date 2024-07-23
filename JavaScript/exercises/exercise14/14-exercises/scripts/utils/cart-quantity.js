//14a

export function updateCartQuantity(cart, selector) {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      //13g
        cartQuantity += cartItem.quantityValue;
    });

    document.querySelector(selector).innerHTML = cartQuantity;
}