export default {
  addToCart(context, payload) {
    context.commit('addProductToCart', payload);
  },
  removeFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
  login(context){
    context.commit('login');
  },
  logout(context){
    context.commit('logout');
  }
};
