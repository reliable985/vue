<template>
  <div>
    <ul class="servrce_box" v-if="homeData"  >
      <li class="servrce_item" v-for="(item,index) in homeData" :key="index" >
        {{item.desc}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{

      }
    },

    name: "Servrce",
   computed:{
      ...mapState({
        homeData:state=>state.homeData.policyDescList
      })
   }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .servrce_box
     width 100%
     height 72px
     display flex
     .servrce_item
       justify-content space-between
       flex 1
       font-size 24px
       line-height 72px
       text-align center
       color red



</style>
