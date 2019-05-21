<template>
    <div>
      <ClassifyHeader/>
      <div style="display: flex" >
        <ClassifyLeftNav />
        <ClassifyRightItem  />
      </div>
    </div>
</template>

<script>
  import ClassifyHeader from 'pages/Classify/components/ClassifyHeader/ClassifyHeader'
  import ClassifyLeftNav from 'pages/Classify/components/ClassifyLeftNav/ClassifyLeftNav'
  import ClassifyRightItem from 'pages/Classify/components/ClassifyRightItem/ClassifyRightItem'
  import {mapState} from 'vuex'
    export default {
        name: "Classify",
        components:{
          ClassifyHeader,
          ClassifyLeftNav,
          ClassifyRightItem
        },
      computed:{
        ...mapState({
          CategoryData:state=>state.categoryData
        })
      },

      mounted() {
         this.$store.dispatch('getCategoryData')
      }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
