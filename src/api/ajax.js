/*
* 能发送ajax请求的函数
* 函数的返回值是promise
* 封装axios+promise
*  1.)统一处理请求异常
*  2.）异常获取的不是response,而是response.data
* */
import axios from 'axios'

export  default function ajax(url,data={},method='GET') {
  return new Promise((resolve,reject)=>{
    let promise
    if (method==='GET'){
      promise = axios.get(url,{
        params:data
      })
    }else {
      promise=axios.post(url,data)
    }
    promise.then(response=>{
      resolve(response.data)
    }).catch(error=>{
      alert('请求出错'+error.message)
    })
  })

}



