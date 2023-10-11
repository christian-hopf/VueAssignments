export default {
  addCoach(state, payload) {
    state.coaches.push(payload);
  },
  loadCoaches(state, payload){
    state.coaches = payload;
  },
  setFetchTimestamp(state){
    state.lastFetch = new Date().getTime(); 
 }
};
