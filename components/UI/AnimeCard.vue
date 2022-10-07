<template>
    
    <div class="card">
        <NuxtLink to="/anidetails" >
        <div class="card-image-box">
            <img :src="animeHeader.animeImg" alt="Image not available" class="card-image">
        </div>
        <div class="card-name">{{animeHeader.animeTitle}}</div>
    </NuxtLink>
    </div>
</template>

<script>
    export default {
        props: ['animeHeader']
    }
</script>

<style scoped>
.card {
height: 25em;
width: 18em;
/* border: 2px solid white; */
/* border-radius: 15px; */
overflow: hidden;
}

.card-image-box {
    height: 88%;
    z-index: 2;
    overflow: hidden;
    border-radius: 10px;
}

.card-image {
    height: 430px;
    position: relative;
    /* bottom: 10px; */
}

.card-name {
    width: 16em;
    height: 2.7em;
    z-index: 3;
    position: sticky;
    bottom: 0px;
    font-size: 1em;
    box-sizing: border-box;
    overflow: hidden;
    padding: 7px;
    padding-left: 0px;
    color: white;
    display: grid;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
    text-decoration: none;
}
</style>
