<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="routes" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/ui/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch('autoLogin');
  },
  computed: {
    didAutoLogout(){
      return this.$store.getters.didAutoLogout;
    }
  },
  watch: {
    didAutoLogout(current, old){
      // if didAutoLogout changes from false to true
      if (current && current !== old){
        this.$router.replace('/coaches');
      }
    }
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.routes-enter-from,
.routes-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.routes-enter-active {
  transition: all 0.3s ease-out;
}
.routes-leave-active {
  transition: all 0.3s ease-in;
}

.routes-enter-to,
.routes-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
