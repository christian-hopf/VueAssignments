<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="showGoal">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleShowGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { reactive } from 'vue';

export default {
  // setup() {
  //   // const goal = 'Learn Vue';
  //   // let showGoal = true;

  //   // const goal = ref('Learn Vue');
  //   // const showGoal = ref(true);

  //   // const data = ref({
  //   //   goal: 'Learn Vue',
  //   //   showGoal: true,
  //   // });

  //   const data = reactive({
  //     goal: 'Learn Vue',
  //     showGoal: true,
  //   });

  //   function toggleShowGoal() {
  //     // this.showGoal.value = !this.showGoal.value;
  //     // data.value.showGoal = !data.value.showGoal;
  //     data.showGoal = !data.showGoal;
  //   }

  //   return {
  //     goal: data.goal,
  //     data: data,
  //     toggleShowGoal: toggleShowGoal,
  //   };
  // },
  data() {
    return {
      goal: 'Learn Vue',
      showGoal: true,
    };
  },
  methods: {
    toggleShowGoal() {
      this.showGoal = !this.showGoal;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
