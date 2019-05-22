<template>
  <div>
    <ul class="personHeader">
      <li class="header_left" @click="$router.replace('/home')">
        <i class="iconfont iconshouye"></i>
      </li>
      <li class="header_span">
        <span class="login" :class="{active:!flag}"  @click="flag=false">发现</span>
        <span class="login" :class="{active:flag}"  @click="flag=true">甄选家</span>
      </li>
      <li class="header_right">
        <i class="iconfont iconsearch" @click="$router.push('/seaech')" ></i>
        <i class="iconfont icongouwuche-"  @click="$router.push('/shoppingCat')"></i>
      </li>
    </ul>
     <ul>
       <li>

       </li>
     </ul>
  </div>

</template>

<script>
  import {reqRecommendData} from '../../../api/index'
  export default {
    name: "Thing-header",
    data(){
      return{
        flag:false
      }
    },
    async mounted() {
           const result=  await reqRecommendData()

            console.log(result)

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personHeader
    background-color white
    height 88px
    font-size 28px
    padding 0 16px 0 24px
    display flex
    justify-content space-between
    align-items center
    z-index 20
    .header_left
      font-size 51px
      line-height 44px
      text-align center
      .iconfont
        line-height 88px
        font-size 54px
    .header_right
      .iconsearch
        font-size 45px
      .icongouwuche-
        line-height 88px
        font-size 50px

     .active
       font-size 38px
       color red
       font-weight bold
</style>
