<template>
    <div id="onlinefriends">
        <h2>Online Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <h2 v-if="friend.online">{{friend.name}}</h2>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'onlinefriends',
    props: ['friends'],
    data() {
        return {

        }
    },
}
</script>
    
<style scoped>
nav {
    text-align: center;
}

nav ul {
    padding: 0;
}

nav li {
    display: inline-block;
    list-style-type: none;
    margin: 0;
    padding: 8px;

}
</style>
    