<script>
import navbar from './components/navbar.vue'
import allfriends from './components/AllFriends.vue'
import onlinefriends from './components/OnlineFriends.vue'
export default {
  components: { navbar, allfriends, onlinefriends },
  methods: {
    deleteFriend(pay) {
      this.friends = this.friends.filter(friends=>{
        return friends.name !== pay.name
      })
    }
  },
  name: 'app',
  data() {
    return {
      title: 'hello World',
      friends: [
        { name: 'A', online: true },
        { name: 'B', online: false },
        { name: 'C', online: true },
        { name: 'D', online: true },
        { name: 'E', online: true },
        { name: 'F', online: false }
      ]
    }
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <navbar />
  <allfriends :friends="friends" @delete ="deleteFriend"> </allfriends>
  <onlinefriends :friends="friends" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
