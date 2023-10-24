<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First name" v-model="firstName" />
      <input type="text" placeholder="Last name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    // const user = reactive({
    //   name: 'Christian',
    //   age: 3,
    // });
    // const userName = ref('Christian');
    const firstName = ref('');
    const lastName = ref('');
    const userAge = ref(24);

    // read-only ref
    const userName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([userAge, userName], function (newVal, oldVal) {
      console.log(oldVal[0], newVal[0]);
      console.log(oldVal[1], newVal[1]);
    });

    function setNewAge() {
      userAge.value = 42;
    }

    return {
      userName: userName,
      age: userAge,
      setAge: setNewAge,
      firstName: firstName,
      lastName: lastName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
