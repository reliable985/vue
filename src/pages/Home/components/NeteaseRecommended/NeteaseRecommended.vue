<template>
  <div class="testimonials " >
    <ul class="testimonials_box clearfix " >
      <li class="testimonials_item " v-for="item in homeData">
        <p class="item_p1">{{item.styleItem.desc}}</p>
        <p class="item_p2">{{item.styleItem.title}}</p>
        <div class="item_imgs">
          <img class="item_img" :src="item.styleItem.picUrlList[0]" alt="">
          <img class="item_img" :src="item.styleItem.picUrlList[1]" alt="">
        </div>
      </li>

    </ul>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "NeteaseRecommended",
    computed:{
      ...mapState({
        homeData:state=>state.homeData.sceneLightShoppingGuideModule
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
      .testimonials
        background-color white
        width 100%
        border-bottom 20px solid #f5f5f5
        .testimonials_box
          height 100%
          margin 10px 30px 30px 26px
          width 100%
          .testimonials_item
            background-color #f5f5f5
            margin  0 4px 4px 0
            float left
            width 343px
            height 260px
            .item_p1
              box-sizing border-box
              font-size: 32px
              margin 10px 0 10px 10px
            .item_p2
              color #7f7f7f
              font-size 24px
              margin 10px 0 10px 10px
            .item_imgs
              display flex
              margin 0
              .item_img
                width 150px
                height 150px

</style>
