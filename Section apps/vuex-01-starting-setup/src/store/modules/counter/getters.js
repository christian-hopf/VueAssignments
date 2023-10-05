export default {
  testAuth(rootState) {
    return rootState.authenticated;
  },
  finalCounter(state) {
    return state.counter * 3;
  },
  normalizedCounter(state, getters) {
    const normalized = getters.finalCounter;
    if (normalized < 0) {
      return 0;
    } else if (normalized > 100) {
      return 100;
    } else {
      return normalized;
    }
  },
};
