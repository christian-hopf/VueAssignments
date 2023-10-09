export default {
  addCoach(context, payload) {
    const newCoach = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.description,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    context.commit('addCoach', newCoach);
  },
};
