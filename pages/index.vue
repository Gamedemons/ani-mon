<template>
  <section>
    <ani-home 
    v-if="isHome" 
    :popularAnime="listAnime" 
    @set-recent-tab="setRecentTab"
    @set-popular-tab="setPopularTab"
    >
  </ani-home>
    <ani-details v-if="isDetail"></ani-details>
    <ani-watch v-if="isWatch"></ani-watch>
  </section>
</template>

<script>
import AniHome from './AniHome.vue'
import AniDetails from './AniDetails.vue'
import AniWatch from './AniWatch.vue';

export default {
  components: { AniHome, AniDetails, AniWatch },
  name: 'IndexPage',
  data() {
    return {
      currentPage: this.$store.getters.getCurrentPage,
      listAnime: [],
      homeTab: this.$store.getters.getHomeTab
    }
  },
  watch: {
    popularAnime(){
      console.log(this.listAnime)
    },
    homeTab(){
      this.$fetch()
    }
  },
  computed: {
    isHome() {
      return this.currentPage == 0 ? true : false
    },
    isDetail() {
      return this.currentPage == 1 ? true : false
    },
    isWatch() {
      return this.currentPage == 2 ? true : false;
    },
  },
  methods: {
    async getPopularAnime() {
      let popularAnime = await fetch("https://gogoanime.herokuapp.com/popular")
        .then((response) => response.json())
        .then((animelist) => {return animelist});
      this.listAnime = popularAnime
    },
    async getRecentAnime() {
      let recentAnime = await fetch("https://gogoanime.herokuapp.com/recent-release")
        .then((response) => response.json())
        .then((animelist) => {return animelist});
      this.listAnime = recentAnime
    },
    setRecentTab(){
      this.homeTab = 0;
    },
    setPopularTab(){
      this.homeTab = 1;
    },

  },
  async fetch() {
    if(this.homeTab == 0){
      await this.getRecentAnime();
    }else{
      await this.getPopularAnime();
    }
  },
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: #222;
}
</style>
