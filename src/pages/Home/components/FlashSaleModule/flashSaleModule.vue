<template>
  <div class="flashSaleModule_box clearfix">
    <div class="common_box clearfix">
      <div class="common_left">
        <span class="common_left_span">限时够
          <i>20</i> : <i>20</i> : <i>20</i>
        </span>
      </div>
      <div class="common_right">
        <span class="common_right_span">更多</span>
        <i class="iconfont icongengduo"></i>
      </div>
    </div>

    <div  v-if="flashSaleModule">
      <div class="comtent_box" v-for="(item,index) in flashSaleModule.itemList " :key="index ">
        <img class="comtent_img" :src="item.picUrl" alt="">
        <div class="price_box">
          <span class="price_new">￥{{item.activityPrice}}</span>
          <span class="price_old"><s>{{item.originPrice}}</s></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {

    name: "flashSaleModule",
    computed:{
      ...mapState({
        flashSaleModule:state=>state.homeData.flashSaleModule
      })
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .flashSaleModule_box
    border-bottom 20px solid #f5f5f5
    .common_box
      line-height 100px
      padding 0 30px
      .common_left
        float left

      .common_left_span
        color #333333
        font-size 32px
        >i
          margin-left 5px
          background-color #333333
          color white
    .common_right
      font-size 30px
      color #333333
      float right


  .comtent_box
    float left
    width 216px
    margin-left 23px
    box-sizing border-box
    .comtent_img
      background-color #f5f5f5
      width 216px
      height 216px
    .price_box
      width 216px
      padding 0 0 0 20px
      margin-bottom 20px
      margin-top 20px
      .price_new
        font-size 28px
        color red
      .price_old
        font-size 26px
        color dimgrey



</style>
