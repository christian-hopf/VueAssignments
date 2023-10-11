export default {
  async contactCoach(context, payload) {
    const request = {
      id: new Date().toISOString(),
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://coachapp-b14a5-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(request),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch coaches'
      );
      throw error;
    }
    request.id = response.name;
    request.coachId = payload.coachId;
    context.commit('addRequest', request);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://coachapp-b14a5-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests'
      );
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  },
};
