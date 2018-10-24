import {
  reqHome,
  reqShiwu,
  reqCategory
} from "../api";
import {
  RECEIVE_HOME,
  RECEIVE_SHIWU,
  RECEIVE_CATEGORY
} from "./mutation-type";
export default {
 async getHome({commit},cb){
    const result = await reqHome()
   if (result.code===0){
      const home = result.data
     commit(RECEIVE_HOME,{home})
   }
   // 在更新状态后立即调用
   typeof cb ==='function' && cb()
  },

  async getShiwu({commit}){
    const result = await reqShiwu()
    if (result.code===0){
      const shiwu = result.data
      commit(RECEIVE_HOME,{shiwu})
    }
  },

  async getCategory({commit}){
    const result = await reqCategory()
    if (result.code===0){
      const category = result.data
      commit(RECEIVE_HOME,{category})
    }
  },

}
