import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      authenticated: false,
    };
  },
  mutations: {
    incrementCounter(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('incrementCounter');
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
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
    authenticationStatus(state) {
      return state.authenticated;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
