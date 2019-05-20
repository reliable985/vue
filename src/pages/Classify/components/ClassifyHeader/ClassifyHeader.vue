<template>
  <div class="box">
    <header class="header">
      <div class="head_search">
        <div class="commodity_search">
          <i class="iconfont iconsearch"  alt=""></i>
          <span>搜索商品，共19999件好物</span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

  import NavList from '../../../../components/HeadNav/NavList/NavList'
  export default {
    name: "HeadNav",
    components:{
      NavList
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
.box
  width 100%
  height 88px
  bottom-border-1px(#d9d9d9)
  .header
    position fixed
    margin-left 25px
    margin-top 5px
    z-index 5
    background #fff
    width 690px
    height 56px

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
          font-size 28px
          margin-right 5px
        span
          font-size 28px
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
