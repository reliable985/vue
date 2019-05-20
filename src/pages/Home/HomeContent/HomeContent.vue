<template>
<div class="content">
  <HomeOneSwiper/>
  <Servrce/>
  <GoodsCategory/>
  <GoodDiary/>
  <NeteaseRecommended/>
  <Customize/>,
  <FlashSaleModule/>
  <NewItemList/>
  <PopularItemList/>
  <TopicList/>
  <zhongChouList/>
  <CategoryModule/>
  <HomeBottom/>
</div>
</template>

<script>


  import HomeOneSwiper from 'pages/Home/components/HomeOneSwiper/HomeOneSwiper'
  import Servrce from 'pages/Home/components/Servrce/Servrce'
  import GoodsCategory from 'pages/Home/components/GoodsCategory/GoodsCategory'
  import GoodDiary from 'pages/Home/components/GoodDiary/GoodDiary'
  import Customize from 'pages/Home/components/Customize/Customize'
  import NeteaseRecommended from 'pages/Home/components/NeteaseRecommended/NeteaseRecommended'
  import FlashSaleModule from 'pages/Home/components/FlashSaleModule/flashSaleModule'
  import NewItemList from 'pages/Home/components/NewItemList/NewItemList'
  import PopularItemList from 'pages/Home/components/PopularItemList/PopularItemList'
  import TopicList from 'pages/Home/components/TopicList/TopicList'
  import zhongChouList from 'pages/Home/components/zhongChouList/zhongChouList'
  import CategoryModule from 'pages/Home/components/CategoryModule/CategoryModule'
  import HomeBottom from 'pages/Home/components/HomeBottom/HomeBottom'
  export default {
    name: "HomeContent",
    components:{
      HomeOneSwiper,
      Servrce,
      GoodsCategory,
      GoodDiary,
      NeteaseRecommended,
      Customize,
      FlashSaleModule,
      NewItemList,
      PopularItemList,
      TopicList,
      zhongChouList,
      CategoryModule,
      HomeBottom
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height 10600px
    zoom 1
    .wrapper
      height 100px
</style>
