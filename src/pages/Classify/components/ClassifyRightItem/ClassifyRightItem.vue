<template>
  <div class="Classfy_right class_wrap "  v-if="right" >
    <div class="Classfy_right_top " v-if="right1 === index"   v-for="(rightObj,index) in right " :key="index">
      <img  class="Classfy_right_topImg" :src="rightObj.bannerUrl" alt="">
      <div class="Classfy_right_bottom" >
        <ul class="Classfy_right_bottom_box clearfix" >
          <li class="Classfy_right_bottom_item"   v-for="(item,index1) in rightObj.subCateList"  :key="index1">
            <img class="Classfy_right_bottom_bannerUrl" :src="item.wapBannerUrl" alt="">
            <span class="Classfy_right_bottom_name">{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import Bus from '../assets/bus'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "ClassifyRightItem",
    computed:{
      ...mapState({
        right:state=>state.categoryData.categoryL1List
       }),
    },
    data(){
      return{
        right1:0
      }
    },

   mounted() {
     Bus.$on("val",(msg)=>{
       this.right1=msg
     })

   },
   updated() {
        this.$nextTick(() => {
          new BScroll('.class_wrap', {
            scrollY: true,//纵向滑动
            click:true
          })
        })
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Classfy_right
    float right
    height 1200px
    .Classfy_right_top
      padding 15px 30px 100px
      box-sizing border-box
      .Classfy_right_topImg
        width 528px
        height 192px
    .Classfy_right_bottom
      .Classfy_right_bottom_box
        height 100%
        .Classfy_right_bottom_item
          padding-left 30px
          box-sizing border-box
          width 144px
          height 216px
          float left
          .Classfy_right_bottom_bannerUrl
            width 144px
            height 144px
          .Classfy_right_bottom_name
            width 144px
            height 72px
            display block
            font-size 28px


</style>
