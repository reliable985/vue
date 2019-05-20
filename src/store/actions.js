/*
* 包含间接跟新状态数据的方法
* 传的是commit 和state,如果不需要可以只写commit
* */

/*export default {
  yyy({commit}){
    //发ajax请求
    setTimeout(()=>{
      //请求成功后，通过commit('mutation的名字'，结果数据（resultdata）)触发mutation 调用
      commit('test','aaaaaaa')
    },2000)

  }
}*/

import {reqHomeData,reqCategoryData} from '../api/index'
import {
  GET_HOME_DATA,
  GET_CATEGORY_DATA

} from "./mutation-types"
export default {

  async getHomeData({commit}){

     //发ajax请求
       const result= await reqHomeData()
       const homeData=result.data
        //判断数据是否成功
      if (result.code===0){
        commit(GET_HOME_DATA,{homeData})

      } else {
        alert('请求数据失败')
      }
   },
  //获取第二页数据
  async getCategoryData({commit}){

    //发ajax请求
      const CategoryData1= await reqCategoryData()
      const CategoryData=CategoryData1.data

    //判断是否成功
      if (CategoryData1.code===0){
         console.log(CategoryData)
        commit(GET_CATEGORY_DATA,CategoryData)
      }else {
        alert('shibai ')
      }

  }







}
