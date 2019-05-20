<template>
 <div>111</div>
</template>

<script>

import {mapState} from 'vuex'
    export default {
      name: "Personage",
      computed:{
          ...mapState({
            Personage:state=>state.homeData.personalShop
          })
      },
      mounted() {

      }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>



</style>
