<template>
 <div class="Classify_left_box">
   <div class="Classify_left swiper_box " v-if="categoryData">
     <ul class="Classify_left_nav" >
       <li  @click="openitem(index)" :class="{active:rightIndex===index}" class="Classify_left_item" v-for="(item,index) in categoryData.categoryL1List" :key="index">
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
  import Bus from '../assets/bus'
  export default {
    data(){
     return{
       rightIndex:0
     }
    },
    name: "ClassifyLeftNav",
    computed:{
      ...mapState({
        categoryData:state=>state.categoryData
      })
    },
    mounted() {
      this.$nextTick(()=>{
        new BScroll('.swiper_box', {
          scrollY: true,

        })
      })
    },
    methods:{
      openitem(index){
        this.rightIndex=index
        Bus.$emit( 'val',this.rightIndex)

      }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.Classify_left_box
  float left
  width 162px
  .Classify_left
    height 1100px
    width 162px
    .Classify_left_nav
      border-right 5px solid #f5f5f5
      width 162px
      .Classify_left_item
        margin-bottom  40px
        width 162px
        height 50px
        font-size 28px
        text-align center
        &.active
          border-left 10px solid red
          background-color #f5f5f5
        >a
          line-height 50px
          font-size 28px
          color #333333

</style>
