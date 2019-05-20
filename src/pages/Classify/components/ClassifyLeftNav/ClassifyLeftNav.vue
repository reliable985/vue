<template>
 <div class="Classify_left_box">
   <div class="Classify_left" v-if="categoryL1List">
     <ul class="Classify_left_nav" v-for="(item,index) in categoryL1List" :key="index">
       <li class="Classify_left_item">
         <a  href="##">
           {{item.name}}
         </a>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {

    name: "ClassifyLeftNav",
    computed:{
      ...mapState({
        categoryL1List:state=>state.categoryData.categoryL1List
      })
    },
    mounted() {
      this.$nextTick({

      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.Classify_left_box
  width 100%
  .Classify_left
    width 100%
    .Classify_left_nav
      .Classify_left_item
        margin-top 40px
        width 162px
        height 50px
        font-size 28px
        text-align center
        >a
          line-height 50px
          font-size 28px
           color #333333

</style>
