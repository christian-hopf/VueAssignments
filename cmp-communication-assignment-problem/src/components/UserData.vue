<template>
    <form @submit.prevent="$emit('update-user', inputName, inputAge)">
        <input type="text" v-model="inputName" />
        <input type="text" v-model="inputAge" />
        <button>Update Active User</button>
    </form>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            inputName: '',
            inputAge: '',
        };
    },
    emits: ['update-user'],
    methods: {

    }
}
</script>