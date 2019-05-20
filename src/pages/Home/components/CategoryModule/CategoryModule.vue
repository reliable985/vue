<template>
 <div class="box ">
   <div class="categoryModule_box clearfix "  v-if="categoryModule" >
     <div class="categoryModule_top" v-for=" (items ,index) in categoryModule " :key="index" >
       <img class="categoryModuleTop_img" :src=" items.titlePicUrl" alt="品类展示">
       <div class="categoryModule_bottom   " >
       <div class="goods_wrapper_">
         <ul class="categoryModuleBottom_box "  >
           <li class="categoryModuleBottom_item"  v-for="(item,index) in items.itemList " :key="index" >
             <img class="item_listPicUrl" :src="item.listPicUrl" alt="">
             <span class="item_name" >{{item.name}}</span>
             <span class="item_retailPrice">￥{{item.retailPrice}}</span>
           </li>
         </ul>
       </div>
       </div>
     </div>




   </div>
 </div>


</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "CategoryModule",
    data(){
      return{
       items:[]
      }
    },

    computed: {
      ...mapState({
        categoryModule: state=> state.homeData.categoryModule
      }),
    },
    mounted() {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    .categoryModule_box
      margin-bottom 20px
      .categoryModule_top
        .categoryModuleTop_img
          width 100%
      .categoryModule_bottom
        .categoryModuleBottom_box
          margin-top 20px
          display flex
          float left
          overflow hidden
          flex-wrap nowrap
          padding 0 30px 0 0
          &:last-child
            border-bottom 20px solid #f5f5f5
          .categoryModuleBottom_item
            margin-left 20px
            .item_listPicUrl
              background-color #f5f5f5
              width 200px
              height 200px
            .item_name
              padding-left 0
              font-size 24px
              margin-top 0
              height 67px
              display block
              line-height  32px
              overflow hidden
              text-overflow ellipsis
              white-space normal
            .item_retailPrice
              display block
              font-size 24px
              color #b4282d


</style>
