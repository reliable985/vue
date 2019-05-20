import Classify from 'pages/Classify/Classify'
import GeneralThings from 'pages/GeneralThings/GeneralThings'
import Personage from 'pages/Personage/Personage'
import ShoppingCat from 'pages/ShoppingCat/ShoppingCat'
import Home from 'pages/Home/Home'

export default [
  {//首页路由
    path:'/home',
    component:Home,
    meta:{
      isSHowHeader:true
    }
  },
  {//分类路由
    path:'/classify',
    component:Classify
  },
  {//食物路由
    path:'/generalThings',
    component:GeneralThings
  },
  {//购物车路由
    path:'/shoppingCat',
    component:ShoppingCat
  },
  {//个人路由
    path:'/personage',
    component:Personage
  },
  {//重定向路由Home
    path:'/',
    redirect:'/home',
  }
]
