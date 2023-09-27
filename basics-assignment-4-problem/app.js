const app = Vue.createApp({
    data() {
        return {
            userClass: '',
            toggle: true,
            bgColor: ''
        };
    },
    computed: {
        toggled(){
            return this.toggle ? 'visible' : 'hidden';
        }
    },
    methods: {
        toggleParagraph(){
            this.toggle = !this.toggle;
        }
    }
});

app.mount('#assignment');