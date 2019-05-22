<template>
    <div>
      <ThingHeader/>
      <!--<TingContent/>-->
      <router-view></router-view>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ThingHeader from './Thing-header/ThingHeader'
  //import TingContent from './Ting-content/TingContent'
    export default {
      name: "GeneralThings",
      components:{
        ThingHeader,
        //TingContent
      },
      computed:{
        ...mapState({
          HeaderItems:state=>state.cecommendData,
          Tabs:state=>state.tabs
        })
      },

      async mounted() {
         await  this.$store.dispatch('getCecommendData')
         await  this.$store.dispatch('getreqRecommendTabs')

      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
