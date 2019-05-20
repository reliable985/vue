<template>
  <div>
    <div class="head_nav ">
      <div class="head_navList wrapper ">
        <ul class="head_navList_black  ">
          <li class="head_nav_item "
              v-for="(item,index) in openitem"
              :key="index"
              @click="changeOn(index) "
              :class="{on:itemindex === index}"
          >
            <a href="#javascript"

              >
              {{item.text}}
            </a>
          </li>
        </ul>
        <div class="head_arrow" >
          <span class="right_span" ></span>
          <div class="unfold_arrow">
            <img :class="{ isOpen: isOpen}" @click="isOpen=!isOpen"  src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="展开" >
          </div>
        </div>
        <div class="nav_mask" v-show="isOpen" >
          <p class="All_channels">全部频道</p>
          <ul class="nav_mask_list" >
            <li  class="mask_list_li" ><a href="" >推荐</a></li>
            <li  class="mask_list_li" ><a href="" >居家生活</a></li>
            <li  class="mask_list_li" ><a href="" >服饰鞋包</a></li>
            <li  class="mask_list_li" ><a href="" >美食酒水</a></li>
            <li  class="mask_list_li" ><a href="" >个人清洁</a></li>
            <li  class="mask_list_li" ><a href="" >母婴亲子</a></li>
            <li  class="mask_list_li" ><a href="" >运动旅行</a></li>
            <li  class="mask_list_li" ><a href="" >数码家电</a></li>
            <li  class="mask_list_li" ><a href="" >礼品特色</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqHomeData} from '../../../api'

  import BScroll from 'better-scroll'
  export default {
    name: "NavList",
    data() {
      return {
        isOpen: false,
        itemindex: 0,
        openitem: []
      }
    },


    async mounted() {
      this.$nextTick(() => {
        new BScroll('.wrapper', {
          scrollX: true,//横向滑动
          click: true//不阻止点击事件触发
        })
      })
      const result = await reqHomeData()
      this.openitem = result.data.kingKongModule.kingKongList
    },
    methods:{
      changeOn(index) {
        this.itemindex = index
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .head_nav
    position relative
    margin-bottom 10px
    width 100%
  .head_navList
    width 100%
    overflow hidden
    .head_navList_black
      float left
      padding-right 150px
      display flex
    .head_nav_item
      box-sizing border-box
      padding 0 16px
      text-align center
      color #333
      font-size 28px
      line-height 60px
      width 150px
      &.on:after
          content ''
          display block
          height 5px
          background red
    .head_arrow
      display flex
      flex-grow 0
      align-items center
      justify-content center
      position absolute
      top 0
      right 0
      z-index 20
      .right_span
        width 6px
        height 6px
        background white
      .unfold_arrow
        width 100px
        height 61px
        text-align center
        background #fff
        display: flex;
        justify-content: center;
        align-items: center;
        img
          transition .5s linear
          &.isOpen
            transform rotateZ(-180deg)
    .nav_mask
      background white
      position absolute
      z-index 2
      .All_channels
        font-size 28px
        height 60px
        margin-left 20px
      .nav_mask_list
        z-index 24
        width 100%
        .mask_list_li
          float left
          width 165px
          height 64px
          margin 7px
          text-align center
          line-height 60px
          font-size: 28px;
          border: 2px solid #d9d9d9;
          background-color: #fafafa;
          a
            display inline-block
            line-height 60px


</style>
