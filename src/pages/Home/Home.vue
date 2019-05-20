<template>

  <div class="home_wrap">
    <div class="scrollWrap">
      <HomeContent class="hom_top"/>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import HomeContent from 'pages/Home/HomeContent/HomeContent'
  export default {
    name: "Home",
    components: {
      HomeContent
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.home_wrap', {
          scrollY: true,//纵向滑动
          click:true
        })
      })

      this.$store.dispatch('getHomeData')
    },

   updated() {
     this.$nextTick(() => {
       new BScroll('.home_wrap', {
         scrollY: true,//纵向滑动
         click:true
       })
     })
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home_wrap
    height 300px
    .hom_top
      padding-top 140px
</style>
