import Classify from 'pages/Classify/Classify'
import GeneralThings from 'pages/GeneralThings/GeneralThings'
import Personage from 'pages/Personage/Personage'
import ShoppingCat from 'pages/ShoppingCat/ShoppingCat'
import Home from 'pages/Home/Home'
import Search from 'pages/Personage/Search/Seaech'
import Login from 'pages/Personage/Login/Login'
import EmailLogin from 'pages/Personage/Login/Email-login'
export default [
  {//首页路由
    path:'/home',
    component:Home,
    meta:{
      isSHowHeader:true,
      isSHowFooter:true
    }
  },
  {//分类路由
    path:'/classify',
    component:Classify,
   meta:{
     isSHowFooter:true
   }
  },
  {//食物路由
    path:'/generalThings',
    component:GeneralThings,
    meta:{
      isSHowFooter:true
    }
  },
  {//购物车路由
    path:'/shoppingCat',
    component:ShoppingCat,
    meta:{
      isSHowFooter:true
    }
  },
  {//个人路由
    path:'/personage',
    component:Personage,
    isSHowFooter:false
  },
  {//搜索页面
    path:'/seaech',
    component:Search,
  },
  {//手机登录
    path:'/login',
    component:Login,
  },
  {//邮箱登录
    path:'/emaillogin',
    component:EmailLogin
  },
  {//重定向路由Home
    path:'/',
    redirect:'/home',
  },

]

