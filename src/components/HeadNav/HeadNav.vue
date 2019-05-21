<template>
<div>
  <header class="header">
    <div class="head_search">
      <img class="indexLogo" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      <div class="commodity_search">
        <i class="iconfont iconsearch"  alt=""></i>
        <span>搜索商品，共xxxx件好物</span>
      </div>
      <span class="login" @click="$router.push('/personage')">登录</span>
    </div>
    <NavList/>
  </header>
</div>
</template>

<script>

  import NavList from 'components/HeadNav/NavList/NavList'
  export default {
    name: "HeadNav",
    components:{
      NavList
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    position fixed
    z-index 5
    background #fff
    width 100%
    .head_search
      display flex
      margin-top 10px
      .indexLogo
        width 138px
        margin 10px 10px 0 20px
        height 40px
      .commodity_search

        display flex
        justify-content center
        align-items center
        flex-grow 1
        height 56px
        background-color #ededed
        border-radius 6px
        color #666
        .iconfont
          font-size 24px
          margin-right 5px
        span
          font-size 24px
      .login
        width 76px
        height 42px
        line-height 42px
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius 4px
        margin 8px 10px 0 15px
        font-size 24px

</style>
