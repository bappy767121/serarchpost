<script>
import navbar from './components/navbar.vue'
import Post from './components/Post.vue'
export default {
  components: { navbar, Post},
  methods: {
    
  },
  name: 'app',
  data() {
    return {
      title: 'hello World',
    }
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <navbar />
  <Post/> <hr>
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
