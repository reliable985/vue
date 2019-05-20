<template>
  <div class="customize_box">
    <div class="common_box clearfix">
      <div class="common_left">
        <span class="common_left_span">私人订制</span>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(items,index) in arr1" :key="index">
          <div class="lunbo_box" v-for="(item,index) in items " :key="index">
            <img  :src="item.scenePicUrl" alt="">
            <div class="span_box">
              <span>{{item.name}}</span>
              <span style="color: red">￥{{item.retailPrice}}</span>
            </div>
          </div>
        </div>

      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>





</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
     data(){
       return{
         arr1:[],
       }
     },
    name: "Customize",
    computed:{
      ...mapState({
        personalShop:state=>state.homeData.personalShop
      }),
    },
    watch:{
      personalShop (val) {
           if (val) {
             for (var i = 0; i < val.length; i+=3) {
               this.arr1.push(val.slice(i,  i+3))
             }
           }
        this.$nextTick(()=>{
          new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay:true,//等同于以下设置
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      },
    },
    mounted() {
      this.$nextTick(()=>{
        new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          autoplay:true,//等同于以下设置
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .customize_box
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


    .lunbo_box
      float left
      width 216px
      margin-left 25px
     img
       background #f5f5f5
       width 216px
       height 216px
       display flex

    .span_box
      margin-top 20px
      span
        width 216px













</style>
