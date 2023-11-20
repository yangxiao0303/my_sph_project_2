import { reqTypeCategory } from "@/api"
export default {
  actions:{
    async getTypeNav({commit,dispatch,state,getters}){
      const result = await reqTypeCategory();
      commit('GETTYPENAV',result.data);
    }
  },
  mutations:{
    GETTYPENAV(state,categoryList){
      state.categoryList = categoryList;
    }
  },
  state:{
    categoryList:[],
  },
  getters:{},
  modules:{},
}