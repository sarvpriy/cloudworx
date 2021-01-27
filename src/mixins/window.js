import Vue from "vue";
const chart = {
    data: function() {
        return {
            windowWidth: window.innerWidth,
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
        },
    },

    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
};
export default chart;