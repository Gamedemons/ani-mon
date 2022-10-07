export const state = () => ({
  currentPage: 0,
  homeTab: 1,
  popularAnime: [],

});

export const getters = {
  getCurrentPage(state) {
    return state.currentPage;
  },
  getPopularAnime(state) {
    return state.currentPage;
  },
  getHomeTab(state) {
    return state.homeTab
  },
};

export const mutations = {};

export const actions = {
  // async getPopularAnime(state) {
  //   let popularAnime = await fetch("https://gogoanime.herokuapp.com/popular")
  //     .then((response) => response.json())
  //     .then((animelist) => console.log(animelist));
  //   state.popularAnime = popularAnime;
  //   return popularAnime
  // },

  setRecentTab(state){
    state.homeTab = 1
  },
  setPopularTab(state){
    state.homeTab = 0
  }
};
