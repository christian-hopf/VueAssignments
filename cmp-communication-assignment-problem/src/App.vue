<template>
    <section>
        <active-user :name="name" :age="age"></active-user>
        <user-data @update-user="updateUser"></user-data>
    </section>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: '',
        }
    },
    methods: {
        updateUser(name, age) {
            this.name = name;
            this.age = age;
        }
    }
}
</script>