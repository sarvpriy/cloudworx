<template>
    <Panel :headerTitle="headerTitle">
        <div class="feeds-container">
            <div class="feed-item" v-for="feed in feeds" :key="feed.id">
                <!-- {{ feed.name }} -->
                <img class="avatar" src="https://picsum.photos/50" alt="avatar" />
                <div class="details">
                    <p class="name">{{ feed.name }}</p>
                    <p class="comment">{{ feed.comment }}</p>
                </div>
            </div>
        </div>
    </Panel>
</template>

<script>
import Panel from "./common/Panel";

export default {
    name: 'Feed',
    components: {
        Panel,
    },
    data() {
        return {
            headerTitle: 'FEED',
            feeds: [
                {
                    id: 1,
                    avatar: '',
                    name: 'Mark henery',
                    comment: 'Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.',
                },
                {
                    id: 2,
                    avatar: '',
                    name: 'Mark henery',
                    comment: 'Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.',
                },
                {
                    id: 3,
                    avatar: '',
                    name: 'Mark henery',
                    comment: 'Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.',
                },
                {
                    id: 4,
                    avatar: '',
                    name: 'Mark henery',
                    comment: 'Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.',
                },
                {
                    id: 5,
                    avatar: '',
                    name: 'Mark henery',
                    comment: 'Lorem ipsum, dolor sit amet conse ctetur adipisicing elit.',
                },
            ],
        }
    }
}
</script>

<style scoped>
.feeds-container {
    display: flex;
    flex-direction: column;
}
.feed-item {
    display: flex;
    padding: 15px;
    border-top: 1px solid #ddd;
    justify-content: center;
    align-items: center;
}
.avatar {
    border-radius: 50%;
}
.details {
    margin-left: 15px;
}
.name {
    font-weight: bold;
}
.comment {
    font-size: 14px;
    max-width: 300px;
    min-width: 150px;
}
</style>