<template>
    <div>
        <header id="header">
            Animon
        </header>

        <nav id="nav">
            <button id="newAnime" class="navBtn" @click="setRecentTab">
                Latest
            </button>
            <button id="popularAnime" class="navBtn" @click="setPopularTab">
                Popular
            </button>
        </nav>

        <div id="animeBody">
            <div id="anime-content" v-for="popularAnimeItem in popularAnime" :key="popularAnimeItem.animeId">
                <anime-card :animeHeader="popularAnimeItem"></anime-card>
            </div>
        </div>

        <footer id="footer">
            End
        </footer>
    </div>
</template>

<script>
import AnimeCard from '../components/UI/AnimeCard.vue';
export default {
    components: {
        AnimeCard
    },
    props: [
        'popularAnime'
    ],
    data() {
        return {
            tmp: {
                animeName: 'Kage no Jitsuryokusha ni Naritakute!',
                animeImageUrl: 'https://gogocdn.net/cover/kage-no-jitsuryokusha-ni-naritakute-1664388804.png',
            }
        }
    },
    methods: {
        setRecentTab(){
            this.$store.dispatch('setRecentTab')
            this.$emit('set-recent-tab', this.$store.getters.getHomeTab)
        },
        setPopularTab(){
            this.$store.dispatch('setPopularTab')
            this.$emit('set-popular-tab', this.$store.getters.getHomeTab)
        },
    }
}
</script>

<style scoped>
#header {

    background-color: black;
    color: red;

    display: grid;
    align-content: center;
    justify-items: center;

    height: 2em;
    font-size: 3em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #555;
    height: 2em;
}

.navBtn {
    display: grid;
    align-content: center;
    justify-items: center;
    font-size: 1.2em;
}

#newAnime {
    box-sizing: border-box;
    border: 3px solid lightskyblue;
    background-color: white;
}

#popularAnime {
    box-sizing: border-box;
    border: 3px solid coral;
    background-color: white;
}

#newAnime:hover {
    background-color: lightskyblue;
    color: white;
}

#popularAnime:hover {
    background-color: coral;
    color: white;
}

#footer {

    background-color: black;
    color: red;

    display: grid;
    align-content: center;
    justify-items: center;

    height: 2em;
    font-size: 3em;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#anime-content {
    background-color: #222;
    margin: 1em;
    margin-bottom: 2em;
    display: grid;
    justify-content: center;
    align-items: center;
}

#animeBody {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}



@media only screen and (max-width: 1700px) {
    #animeBody {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media only screen and (max-width: 1300px) {
    #animeBody {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media only screen and (max-width: 1000px) {
    #animeBody {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width: 650px) {
    #animeBody {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
