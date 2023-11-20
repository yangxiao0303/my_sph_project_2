import { mockBanner, mockFloor, reqTypeCategory } from "@/api";
export default {
  actions: {
    async getTypeNav({ commit, dispatch, state, getters }) {
      const result = await reqTypeCategory();
      commit("GETTYPENAV", result.data);
    },
    async reqBanner({ dispatch, commit, state, getters }) {
      const result = await mockBanner();
      commit("MOCKBANNER", result.data);
    },
    async reqFloor({ dispatch, commit, state, getters }) {
      const result = await mockFloor();
      commit("MOCKFLOOR", result.data);
    },
  },
  mutations: {
    GETTYPENAV(state, categoryList) {
      state.categoryList = categoryList;
    },
    MOCKBANNER(state, bannerList) {
      state.bannerList = bannerList;
    },
    MOCKFLOOR(state, floorList) {
      state.floorList = floorList;
    },
  },
  state: {
    // storage the data of home page category
    categoryList: [],
    // home page bannerlist
    bannerList: [],
    floorList: [],
  },
  getters: {},
  modules: {},
};
