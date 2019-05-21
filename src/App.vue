<template>
  <div id="app">
    <HeaderNave v-show="$route.meta.isSHowHeader" />
      <router-view/>
    <FooterNav v-show="$route.meta.isSHowFooter"/>
  </div>
</template>

<script>
  import HeaderNave from 'components/HeadNav/HeadNav'
  import FooterNav from './components/FooterNav/FooterNav'
export default {
  name: 'App',
  components:{
    FooterNav,
    HeaderNave
  }
}
</script>

<style>

</style>
