<template>
    <Panel :headerTitle="headerTitle" :panelType="'sm'">
        <div class="b-feeds__container">
            <div class="b-feeds__item" v-for="feed in feeds" :key="feed.id">
                <img class="b-feeds__avatar" src="https://picsum.photos/50" alt="avatar" />
                <div class="b-feeds__details">
                    <p class="b-feeds__name">{{ feed.name }}</p>
                    <p class="b-feeds__comment">{{ feed.comment }}</p>
                </div>
            </div>
        </div>
    </Panel>
</template>

<script>
import Panel from "./common/Panel";
import { appDetials } from "../mock/mock";


export default {
    name: 'Feed',
    components: {
        Panel,
    },
    data() {
        return {
            headerTitle: 'FEED',
            feeds: [],
        }
    },
    mounted() {
        this.feeds = appDetials.feeds
    }
}
</script>

<style scoped>
.b-feeds__container {
    display: flex;
    flex-direction: column;
}
.b-feeds__item {
    display: flex;
    padding: 15px;
    border-top: 1px solid #ddd;
    justify-content: center;
    align-items: center;
}
.b-feeds__avatar {
    border-radius: 50%;
}
.b-feeds__details {
    margin-left: 15px;
}
.b-feeds__name {
    font-weight: bold;
}
.b-feeds__comment {
    font-size: 14px;
    max-width: 300px;
    min-width: 150px;
}
</style>