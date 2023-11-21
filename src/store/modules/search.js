import { reqSearch } from "@/api"

export default {
  actions:{
    async getSearch({dispatch,commit,state,getters},data){
      const result = await reqSearch(data);
      commit("GETSEARCH",result.data);
    }
  },
  mutations:{
    GETSEARCH(state,goodsInfo){
      state.goodsInfo = goodsInfo;
      console.log(goodsInfo);
    }
  },
  state:{
    goodsInfo:{},
  },
  getters:{},
  modules:{},
}