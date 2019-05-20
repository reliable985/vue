<template>
  <div>
    <ul class="goods_box" v-if="homeData.kingKongModule" >
      <li class="goods_list" v-for=" (item,index) in  homeData.kingKongModule.kingKongList" :key="index">
        <a class="goods_a" href="#javascript">
          <img class="goods_img" :src="item.picUrl" alt="">
          <p class="goods_name">{{item.text}}</p>
        </a>
      </li>


    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "GoodsCategory",
    computed: {
      ...mapState({
        homeData: state => state.homeData
      })
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .goods_box
    width 100%
    .goods_list
      display inline-block
      margin-left 32px
      .goods_a
        margin 0
        .goods_img
          width 110px
          height 110px
        .goods_name
          margin-top 10px
          font-size 24px
          text-align center







</style>
