const app = Vue.createApp({
    data(){
        return {
            output: '',
            enterOutput: '',
        };
    },
    methods: {
        bruhAlert(){
            alert("Button");
        },
        setOutput(event){
            this.output = event.target.value;
        },
        setEnterOutput(event){
            this.enterOutput = event.target.value;
        }
    }
});

app.mount('#assignment');