<template>
    <Panel>
        <div class="b-superapp__header">
            <img class="b-superapp__header-img" src="https://picsum.photos/100" alt="super app" />
            <div class="b-superapp__header-title">Super App</div>
        </div>
        <div class="b-superapp__bar">
            <p>Most Populer App</p>
            <p>{{ appDetials.mostPopulerApp | doller }}</p>
        </div>
        <div class="b-superapp__bar">
            <div class="b-superapp__item">
                <p>Total visits</p>
                <p>{{ appDetials.totalVisits | currency }}</p>
            </div>
            <div class="b-superapp__item">
                <p>New visits</p>
                <p>{{ appDetials.newVisits | currency }}</p>
            </div>
            <div class="b-superapp__item">
                <p>Sales</p>
                <p>{{ appDetials.sales | currency }}</p>
            </div>
        </div>
    </Panel>
</template>

<script>
import Panel from "./common/Panel";
import { appDetials } from "../mock/mock";

export default {
    name: 'SuperApp',
    components: {
        Panel,
    },
    data() {
        return {
            appDetials: '',
        }
    },
    mounted() {
        this.appDetials = appDetials
    },
}
</script>

<style scoped>
.b-superapp__header {
    padding: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.b-superapp__header-img {
    border-radius: 50%;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
}
.b-superapp__header-title {
    margin-left: 20px;
    font-weight: bold;
    font-size: 24px;
}
.b-superapp__bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    border-top: 1px solid #ddd;
}
.b-superapp__item {}
</style>