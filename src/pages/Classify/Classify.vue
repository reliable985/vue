<template>
    <div>
      <ClassifyHeader/>
      <ClassifyLeftNav/>
    </div>
</template>

<script>
  import ClassifyHeader from 'pages/Classify/components/ClassifyHeader/ClassifyHeader'
  import ClassifyLeftNav from 'pages/Classify/components/ClassifyLeftNav/ClassifyLeftNav'
  import {mapState} from 'vuex'
    export default {
        name: "Classify",
        components:{
          ClassifyHeader,
          ClassifyLeftNav
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
