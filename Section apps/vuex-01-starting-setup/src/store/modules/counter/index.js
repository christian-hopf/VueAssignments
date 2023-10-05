import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
  // namespace must be specified to use getters etc
  // namespace is the module key in the main store
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
