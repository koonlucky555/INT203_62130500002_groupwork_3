const app = {
    data() {
        return {
            tasks: [
                {
                    title: 'HAVEN',
                    imgUrl: 'https://valorantnews.in/wp-content/uploads/2020/07/Competitive-map-selection-process-is-dismissed-by-Riot-in-Valorant.png',
                    done: false
                },
                {
                    title: 'ICEBOX',
                    imgUrl: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt49f5428318197010/5fab4f07c1502b76a169b4d0/Icebox_Splash_v2.jpg',
                    done: false
                },
                {
                    title: 'BIND',
                    imgUrl: 'https://trackercdn.com/ghost/images/2020/9/7174_Loading_Screen_Bind.png',
                    done: false
                },
                {
                    title: 'ASCENT',
                    imgUrl: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2020/06/Valorant-Ascent.jpg?q=50&fit=crop&w=740&h=370',
                    done: false
                }
            ]
        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
        },
    },
    computed: {
        countUndone() {
            return this.tasks.length;
        },
    },
};
Vue.createApp(app).mount("#app");