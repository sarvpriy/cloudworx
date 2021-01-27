<template>
    <Panel :headerTitle="headerTitle" class="">
        <div class="header">
            <img class="header-img" src="https://picsum.photos/100" alt="super app" />
            <div class="header-title">Super App</div>
        </div>
        <div class="bar">
            <p>Most Populer App</p>
            <p>175$</p>
        </div>
        <div class="bar">
            <div class="item">
                <p>Total visits</p>
                <p>47,512</p>
            </div>
            <div class="item">
                <p>New visits</p>
                <p>9,217</p>
            </div>
            <div class="item">
                <p>Sales</p>
                <p>2,938</p>
            </div>
        </div>
    </Panel>
</template>

<script>
import Panel from "./common/Panel";
// import {Chart} from 'highcharts-vue'

export default {
    name: 'SuperApp',
    components: {
        Panel,
        // highcharts: Chart,
    },
    data() {
        return {
            headerTitle: '',
        }
    }
}
</script>

<style scoped>
.header {
    padding: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.header-img {
    border-radius: 50%;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
}
.header-title {
    margin-left: 20px;
    font-weight: bold;
    font-size: 24px;
}
.bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    border-top: 1px solid #ddd;
}
.item {}
</style>