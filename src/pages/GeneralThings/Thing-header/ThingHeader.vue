<template>
  <div>
    <ul class="personHeader">
      <li class="header_left" @click="$router.replace('/home')">
        <i class="iconfont iconshouye"></i>
      </li>
      <li class="header_span">
        <span class="login" :class="{active:!flag}"  @click="flag=false , $router.push('/generalThings/find')">发现</span>
        <span class="login" :class="{active:flag}"  @click="flag=true,$router.push('/generalThings/selection')">甄选家</span>
      </li>
      <li class="header_right">
        <i class="iconfont iconsearch" @click="$router.push('/seaech')" ></i>
        <i class="iconfont icongouwuche-"  @click="$router.push('/shoppingCat')"></i>
      </li>
    </ul>
    <div class="navList tabs_wrap"  v-show="!flag">
        <ul class="navItem" >
          <li  v-if="Tabs"   @click="change(index)"  :class="{active:index===couent}"  class="tabs_li" v-for="(item,index) in Tabs " :key="index">
          {{item.tabName}}
          </li>
        </ul>
    </div>
  </div>

</template>

<script>
  import BScroll  from 'better-scroll'
 import {mapState} from 'vuex'
  export default {
    name: "Thing-header",
    data(){
      return{
        flag:false,
        couent:0
      }
    },
   computed:{
     ...mapState({
       Tabs:state=>state.tabs
     })
   },
    methods:{
      change(index){
        this.couent=index
      }

    },
    updated() {
      this.$nextTick(() => {
        new BScroll('.tabs_wrap', {
          scrollX: true,//纵向滑动
          click:true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personHeader
    background-color #f5f5f5
    height 88px
    font-size 28px
    padding 0 16px 0 24px
    display flex
    justify-content space-between
    align-items center
    z-index 20
    border-bottom  3px solid #C6C6C6
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
  .navList
    background-color #f5f5f5
    overflow hidden
    border-bottom 3px solid #C6C6C6
    height 80px
    .navItem
      padding-bottom 10px
      box-sizing border-box
      width 1000px
      display flex
      white-space nowrap
      justify-content space-between
      .tabs_li
        text-align center
        font-size 30px
        margin 0 10px
        padding 0 4px
        line-height 76px
        &.active
          position relative
          border-bottom 5px solid  #B4282D
          color #B4282D;
          font-size 35px




</style>
