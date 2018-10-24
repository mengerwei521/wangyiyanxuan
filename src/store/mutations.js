
import {
  RECEIVE_HOME,
  RECEIVE_SHIWU,
  RECEIVE_CATEGORY
} from "./mutation-type";
export default {
  [RECEIVE_HOME](state,{home}){
    state.home = home
  },
  [RECEIVE_SHIWU](state,{shiwu}){
    state.shiwu = shiwu
  },
  [RECEIVE_CATEGORY](state,{category}){
    state.category = category
  }
}
