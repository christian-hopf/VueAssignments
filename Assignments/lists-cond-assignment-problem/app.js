const app = Vue.createApp({
    data(){
        return {
            input: '',
            show: true,
            tasks: []
        };
    },
    methods: {
        addTask(){
            this.tasks.push(this.input);
            this.input = '';
        },
        toggleShow(){
            this.show = !this.show;
        }
    }
});

app.mount('#assignment');