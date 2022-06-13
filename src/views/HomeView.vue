<template>
    <div>
        <img src="../intern.png">
        <h1>Intern Sign Up</h1>
        <Input />
    </div>
</template>

<script>
import Input from '../components/Input.vue'


    export default{
        name: 'HomeView',
        components: {
            Input,
        },
    }
</script>

<style scoped>
h1{
    display: flex;
    font-size: 2.25em;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    }

img{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto
    }

@media screen and (max-width: 600px) {
h1{
    margin-top: auto;
    margin-left: auto;   
}

img{
    margin-top: auto;
    margin-left: auto;
}
}
</style>