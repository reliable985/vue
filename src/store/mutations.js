/*
* 暴露用于直接更新状态数据方法的对象
* */
/*export default {
  test(state,resultData){
    state.xxx = resultData
  }
}*/
import {
  GET_HOME_DATA,
  GET_CATEGORY_DATA
} from "./mutation-types"
export default {
  [GET_HOME_DATA](state,{homeData}){
    state.homeData=homeData //home数据
  },
 [GET_CATEGORY_DATA](state,categoryData){
    state.categoryData=categoryData
 }
}
