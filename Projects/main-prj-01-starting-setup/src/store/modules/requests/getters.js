export default {
  requests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId;
    console.log(state.requests);
    return state.requests.filter((r) => r.coachId === coachId);
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
