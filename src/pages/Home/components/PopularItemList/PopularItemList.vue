<template>
  <div class="Popularltem">
    <div class="common_box clearfix">
      <div class="common_left">
        <span class="common_left_span">新品首发</span>
      </div>
      <div class="common_right">
        <span class="common_right_span">更多</span>
        <i class="iconfont icongengduo"></i>
      </div>
    </div>

    <ul class="popular_goods" v-if="PopularItemList">
      <li v-for="(item, index) in PopularItemList" :key="index">
        <img v-lazy="item.primaryPicUrl" :src="item.primaryPicUrl" alt="人气推荐">
        <div class="popular_info">
          <span class="popular_name" v-show="index===0">{{item.name}}</span>
          <span class="popular_desc" >{{item.simpleDesc}}</span>
          <span class="popular_price">¥{{item.retailPrice}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "PopularItemList",
    computed:{
      ...mapState({
        PopularItemList:state=>state.homeData.popularItemList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .Popularltem
    width 100%
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
    .popular_goods
      width 100%
      display flex
      flex-wrap wrap
      padding-left 30px
      >li
        width 216px
        height 318px
        margin-right 20px
        &:first-child
          width 100%
          height 320px
          display flex
          align-items center
          >img
            width 280px
            height 280px
            margin 0
          .popular_info
            margin 0 50px
          .popular_name
            display block
        >img
          width 216px
          height 216px
          margin-bottom 12px
          background-color #f5f5f5
        .popular_info
          height 100px
          font-size 24px
          line-height 36px
          .popular_name
            color #333333
          .popular_desc
            font-size 24px
            color #7f7f7f
          .popular_price
            color $themeColor



</style>
