const app = Vue.createApp({
    data(){
        return {
            name: 'Christian',
            age: 23,
            cheeseImg: 'https://www.vincenzosplate.com/wp-content/uploads/2023/03/1500x1500-Photo-3_2447-How-to-Make-PECORINO-CHEESE-at-Home-Like-an-Italian-CheeseMaker-V1-1.jpg'
        };
    },
    methods: {
        favorite(){
            return Math.random();
        }
    }
});
app.mount('#assignment');