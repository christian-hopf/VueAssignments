const app = Vue.createApp({
    data() {
        return {
            count: 0,
        };
    },
    watch: {
        result(){
            console.log('watch');
            const bruh = this;
            setTimeout(function(){
                bruh.count = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if (this.count === 37) {
                return '37';
            }
            else if (this.count > 37) {
                return 'Too much';
            }
            else {
                return 'Not there yet';
            }
        }
    },
    methods: {
        add(num) {
            this.count += num;
        }
    }
});

app.mount('#assignment')