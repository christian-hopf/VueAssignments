<template>
  <button v-if="!authenticationStatus" @click="login">Login</button>
  <button v-if="authenticationStatus" @click="logout">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['authenticationStatus']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>
