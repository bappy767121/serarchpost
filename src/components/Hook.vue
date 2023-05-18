<template>
    <div class="Hook">
        <h1>{{ title }}</h1>
        <button @click="updateTitle">Click me</button>
    </div>
</template>
    
<script>
export default {
    name: 'app',
    data() {
        return {
            title: 'Hook'

        }
    },
    beforeCreate() {
        alert('beforecreate hook')
    },
    created() {
        alert('create hook')
    },
    beforeUpdate() {
        alert('before updated')
    },
    updated() {
        alert('updated')
    },
    methods: {
        updateTitle(){
            this.title ='Updated Title'
        }
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
</style>
    