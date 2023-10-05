export default {
  increment(context) {
    setTimeout(() => {
      context.commit('incrementCounter');
    }, 2000);
  },
  increase(context, payload) {
    console.log(context);
    context.commit('increase', payload);
  },
};
