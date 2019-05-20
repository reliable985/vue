<template>

    <div class="top_swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div style="width: 100%;height: auto" class="swiper-slide" v-for="(img,index) in imgNodes" :key="index">
            <img style="height:auto;width: 100%" v-lazy="img" :src="img" alt="img"/>
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
  import 'swiper/dist/css/swiper.css'
 /* import Swiper from 'swiper'*/
  export default {
    name:'HomeOneSwiper',
    data() {
      return {
        imgNodes:[
          'https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0'
        ]

      }
    },
    mounted(){
          /*new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay:true,//自动切换
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },

          })*/

    }



  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    height 367.5px


</style>
