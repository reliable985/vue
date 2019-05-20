//与后台交互
import ajax from './ajax'
/*
* 获取homedata
* */
export const reqHomeData = () => ajax('/mock/home',)
/*
* 获取category
* */
export  const  reqCategoryData=() =>ajax('/mock/category')


