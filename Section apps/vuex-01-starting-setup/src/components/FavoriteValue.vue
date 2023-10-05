<template>
  <h3>{{ counter }}</h3>
  <p>bruh</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['counter/normalizedCounter'];
    },
  },
};
</script>
