<template>
   <div class="box">
     <Header/>
     <div class="person_content">
       <div class="login_img">
         <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
       </div>
     </div>
     <div class="register_login_window">
       <div class="login_top1" >
         <i class="iconfont iconshoujihao- "></i>
         <span @click="$router.push('./login')" >手机号登录</span>
       </div>
       <div class="login_top2">
         <i class="iconfont iconyouxiang1 "></i>
         <span @click="$router.push('/emaillogin')">邮箱账号登录</span>
       </div>
       <div class="login_top3">
         <span class="register_window">手机号快捷注册</span>
         <span class="iconfont icongengduo"></span>
       </div>
     </div>
     <div class="person_bottom_box">
       <span><i class="iconfont iconweixin1 "></i>微信</span>
       |
       <span><i class="iconfont iconqq"></i> QQ</span>
       |
       <span class="iconfont iconweibo"><i></i>微博</span>
     </div>
   </div>

</template>

<script>
import Header from './CommonHeader/Header'
import {mapState} from 'vuex'
    export default {
      name: "Personage",
      components:{
        Header
      },
      computed:{
          ...mapState({
            Personage:state=>state.homeData.personalShop
          })
      },

    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .box
    height 2000px
    background-color #f5f5f5
    .person_content
      background-color #f5f5f5
     .login_img
       display flex
       justify-content center
       padding 160px 0
      img
        width 268px
        height 90px
    .register_login_window
      background-color #f5f5f5
      padding 0 40px
      box-sizing border-box
      .login_top1
        height 94px
        width 100%
        background-color #b4282d
        display flex
        justify-content center
        align-items center
        .iconfont
          font-size 40px
          margin-right 20px
          color white
        span
          font-size 26px
          color white
      .login_top2
        margin 32px 0
        height 94px
        width 100%
        border 2px solid #b4282d
        display flex
        justify-content center
        align-items center
        .iconfont
          font-size 40px
          margin-right 20px
        span
          font-size 26px
          color #b4282d


      .login_top3
        display flex
        justify-content center
        align-items center
        .iconfont
          font-size 28px



    .person_bottom_box
      position absolute
      left 50%
      margin-left -259px
      bottom 30px
      display flex
      justify-content center
      align-items center
      span
        margin 0 20px
        font-size 30px
        i
          font-size 30px
          margin 0 20px
</style>
