<template>
  <button @click="increment">Add 3</button>
  <button @click="increase({ value: 12 })">Add 12</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //     this.$store.dispatch('increment');
    // },
    ...mapActions('counter', ['increment', 'increase']),
  },
};
</script>
