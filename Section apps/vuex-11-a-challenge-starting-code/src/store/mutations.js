export default {
  addProductToCart(state, payload) {
    const product = state.products.find((p) => p.id === payload.id);
    const productInCartIndex = state.cart.items.findIndex(
      (ci) => ci.productId === payload.id
    );

    if (productInCartIndex >= 0) {
      state.cart.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        qty: 1,
      };
      state.cart.items.push(newItem);
    }
    state.cart.qty++;
    state.cart.total += product.price;
  },

  removeProductFromCart(state, payload) {
    const prodId = payload.prodId;
    const productInCartIndex = state.cart.items.findIndex(
      (cartItem) => cartItem.productId === prodId
    );
    const prodData = state.cart.items[productInCartIndex];
    state.cart.items.splice(productInCartIndex, 1);
    state.cart.qty -= prodData.qty;
    state.cart.total -= prodData.price * prodData.qty;
  },
  login(state) {
    state.isLoggedIn = true;
  },
  logout(state) {
    state.isLoggedIn = false;
  },
};
