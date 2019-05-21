//与后台交互
import ajax from './ajax'
// const prefix = '/api';
const prefix = '/api'
/*
* 获取homedata
* */
export const reqHomeData = () => ajax('/mock/home',)
/*
* 获取category
* */
export  const  reqCategoryData=() =>ajax('/mock/category')

// 识物-推荐 数据 ----
export const reqRecommendData =()=> ajax(`${prefix}/topic/v1/find/recManual.json`);


