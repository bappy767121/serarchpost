<template>
    <div>
        <h1>{{ title }}</h1>
        <input type="text" v-model="searcFilter">
        <div v-for="post in filtersearchs" :key="post.id" class="post">
            <h2>{{ post.title }}</h2>

            <p>{{ $filters.snippet(post.body) }}</p>
        </div>
    </div>
</template>
    
<script>
import axios from 'axios'
export default {
    name: 'post',
    data() {
        return {
            title: 'Post',
            posts: [],
            searcFilter: ''

        }
    },
    computed :{
    filtersearchs(){
        return this.posts.filter(post => {
            return post.title.match(this.searcFilter)
        })
    }
},

methods: {

},
created(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.posts = response.data
        })
        .catch(error => {
            console.log(error)
        })
}
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

h1 {
    text-align: center;
    color: aqua;
}

h2 {
    text-align: center;

}

p {
    text-align: center;

}

.post {
    background-color: rgb(220, 217, 217);
}</style>
    