<template>
  <ul class="personHeader">
    <li class="header_left" @click="$router.replace('/home')">
      <i class="iconfont iconshouye"></i>
    </li>
    <li class="header_span">
      <span class="login">网易严选</span>
    </li>
    <li class="header_right">
      <i class="iconfont iconsearch" @click="$router.push('/seaech')" ></i>
      <i class="iconfont icongouwuche-"  @click="$router.push('/shoppingCat')"></i>
    </li>
  </ul>
</template>

<script>
  export default {

    name: "Header"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personHeader
    background-color white
    height 88px
    font-size 43px
    padding 0 16px 0 24px
    display flex
    justify-content space-between
    align-items center
    z-index 20
    .header_left
      font-size 44px
      line-height 44px
      text-align center
      .iconfont
        line-height 88px
        font-size 86px
    .header_right
      font-size 48px
      .iconfont
        line-height 88px
        font-size 62px
</style>
