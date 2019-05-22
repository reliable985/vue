//与后台交互
import ajax from './ajax'
 const prefix = '/api';
/*
* 获取homedata
* */
export const reqHomeData = () => ajax('/mock/home',)
/*
* 获取category
* */
export  const  reqCategoryData=() =>ajax('/mock/category')

// 识物-推荐 数据 ----
export const reqRecommendData = () => ajax(`${prefix}/topic/v1/find/recManual.json`)
// 识物-Tab 懒数据 ---- http://m.you.163.com/topic/v1/find/getTabs.json
export const reqRecommendTabs = () => ajax(`${prefix}/topic/v1/find/getTabs.json`);

//搜索
export const reqSearchData=(keywordPrefix)=> ajax(prefix+'/xhr/search/searchAutoComplete.json',{keywordPrefix})
     console.log(reqSearchData())
export const reqData=()=> ajax(prefix+'/xhr/search/init.json')
