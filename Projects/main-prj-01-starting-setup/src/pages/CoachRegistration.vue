<template>
  <section>
    <base-card>
      <h2>Register as a Coach</h2>
      <coach-register-form @on-register="registerCoach"></coach-register-form>
    </base-card>
  </section>
</template>

<script>
import CoachRegisterForm from '../components/coaches/CoachRegisterForm.vue';

export default {
  components: {
    CoachRegisterForm,
  },
  methods: {
    registerCoach(formData) {
      this.$store.dispatch('coaches/addCoach', formData);
      this.$router.replace('/coaches');
    },
  },
};
</script>
