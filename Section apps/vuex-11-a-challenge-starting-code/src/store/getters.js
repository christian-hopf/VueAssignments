export default {
  cartItems(state) {
    return state.cart.items;
  },
  cartTotal(state) {
    return state.cart.total;
  },
  cartQuantity(state) {
    return state.cart.qty;
  },
  products(state) {
    return state.products;
  },
  isAuthenticated(state) {
    return state.isLoggedIn;
  },
};
