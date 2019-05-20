<template>
  <div class="topicList_box">
    <div class="common_box clearfix">
      <div class="common_left">
        <span class="common_left_span">专题精选
        </span>
      </div>
      <div class="common_right">
        <span class="common_right_span">更多</span>
        <i class="iconfont icongengduo"></i>
      </div>
    </div>

     <div class="home_wrap clearfix">
       <ul class="topicList_box_bottom ">
         <li class="topicList_item"  v-for="(item,index) in topicList" :key="index">
           <img class="topicList_img" :src="item.scenePicUrl" alt="">
           <ul class="topicList">
             <li class="topicList_title">{{item.title}}</li>
             <li class="topicList.subtitle">{{item.subtitle}}</li>
           </ul>
         </li>
       </ul>
     </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {

    name: "TopicList",

    computed:{
      ...mapState({
        topicList:state=>state.homeData.topicList
      })
    },
   mounted () {
     this.$nextTick(() => {
     const my=  new BScroll('.home_wrap', {
         scrollX: true,//纵向滑动
       })
     })
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topicList_box
    border-bottom 20px solid #f5f5f5
    .common_box
       line-height 100px
       padding 0 30px
      .common_left
        float left
       .common_left_span
          color #333333
          font-size 32px
      .common_right
        font-size 30px
        color #333333
        float right

  .home_wrap
    position relative
    left 0
    top:0
    .topicList_box_bottom
       margin-bottom 20px
       float left
       display flex
       .topicList_item
         margin-left 30px
         width 480
         .topicList_img
           width 420px
           height 267px
         .topicList
           width 420px
           overflow hidden
           text-overflow ellipsis
           white-space nowrap





</style>
