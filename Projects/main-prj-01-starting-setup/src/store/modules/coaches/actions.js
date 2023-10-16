export default {
  async addCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const newCoach = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.description,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://coachapp-b14a5-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`,
      {
        method: 'PUT',
        body: JSON.stringify(newCoach),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch coaches'
      );
      throw error;
    }

    context.commit('addCoach', { ...newCoach, id: userId });
  },
  async fetchCoaches(context, payload) {
    if (!payload.refresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      'https://coachapp-b14a5-default-rtdb.firebaseio.com/coaches.json'
    );
    const responseData = await response.json();
    if (!response.ok) {
      // error
    }
    console.log(responseData);
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }
    context.commit('loadCoaches', coaches);
    context.commit('setFetchTimestamp');
  },
};
