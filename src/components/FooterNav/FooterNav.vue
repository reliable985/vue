<template>
    <div>
      <ul class="footNav">
        <li class="footItem" :class="{on:$route.path==='/home'}" @click="goTo('/home')">
          <i class="iconfont iconshouye "  alt=""></i>
          <span>首页</span>
        </li>
        <li class="footItem" :class="{on:$route.path==='/classify'}" @click="goTo('/classify')">
          <i class="iconfont iconfenlei- "  alt=""></i>
          <span>分类</span>
        </li>
        <li class="footItem" :class="{on:$route.path==='/generalThings'}" @click="goTo('/generalThings')">
          <i class="iconfont iconshiwu "  alt=""></i>
          <span>识物</span>
        </li>
        <li class="footItem" :class="{on:$route.path==='/shoppingCat'}" @click="goTo('/shoppingCat')">
          <i class="iconfont icongouwuche- "  alt=""></i>
          <span>购物车</span>
        </li>
        <li class="footItem" :class="{on:$route.path==='/personage'}" @click="goTo('/personage')">
          <i class="iconfont iconwode- "  alt=""></i>
          <span>个人</span>
        </li>
      </ul>
    </div>
</template>

<script>
  import mixins from '../../common/stylus/mixins.styl'
  export default {
    name: "FooterNav",
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .footNav
    position: fixed
    background #fafafa
    z-index 30
    bottom 0
    display flex
    align-items center
    width 100%
    height 100px
    .footItem
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color   red
    .iconfont
      font-size 40px
    span
      font-size 24px

</style>
