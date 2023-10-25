<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  //   computed: {
  //     userName(){
  //         return this.firstName + ' ' + this.lastName;
  //     }
  //   },
  setup(props) {
    const userName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('age');

    onBeforeMount(function(){
        console.log('onBeforeMount');
    })
    onMounted(function(){
        console.log('onMounted');
    })
    onBeforeUpdate(function(){
        console.log('onBeforeUpdate');
    })
    onUpdated(function(){
        console.log('onUpdated');
    })
    onBeforeUnmount(function(){
        console.log('onBeforeUnmount');
    })
    onUnmounted(function(){
        console.log('onUnmounted');
    })

    return { userName, age };
  },
};
</script>
