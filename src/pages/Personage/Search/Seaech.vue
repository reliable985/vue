<template>
  <div class="pageWrap">
    <div class="wrap">
      <div class="headWrap">
        <input type="search"
               class="searchInput"
               v-model="inputVal"
               @keyup.enter="test(inputVal)"
               maxlength="20"
        />
        <span class="cancel" @click="clear,$router.go(-1)">取消</span>
      </div>
      <div class="history">
        <span>历史记录:</span>
        <ul>
          <li>
          </li>
        </ul>
        <button>清除历史记录</button>
      </div>
      <transition name="searcResult">
        <div class="recResult" v-if="searchResult">
          <ul class="recs" v-for="(item,index) in searchResult " :key="index">
            <li>{{item}}</li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="defaultKeywords" v-if="!inputVal">
      <span>热门搜索：</span>
      <ul>
        <li v-for="(itemHost,index) in items.hotKeywordVOList" :key="index">{{itemHost.keyword}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {reqSearchData, reqData} from '../../../api'
  //import StorageUtil from '@/utils/storageUtil'
  export default {
    name: 'index',
    data() {
      return {
        inputVal: '',
        items: [],
        timer: null,
        searchResult: [],
        hasresult:true
      }
    },
    methods: {
      async test(inputVal) {
        if (inputVal===''){
           //如果inputVal等于空将保存的searchResult变成空
           this.searchResult=[]
          return false
        }
         const result = await  reqSearchData(inputVal)
         const resultData =result.data
        if (result.code==='200'&&resultData){
          //如果请求成功把请求结果保存到searchResult在列表下方显示
           this.searchResult=resultData
        }else {
          alert('请求失败')
        }
      },
      clear() {
        this.inputVal = ''
      }
    },

    async mounted() {
      const item = await reqData()
      const item1 = item.data
      if (item.code === '200') {
        this.items = item1

      } else {
           alert('请求出错')
      }
    },

    watch: {
      inputVal(newval, oldval) {
          clearInterval(this.timer)
        this.timer = setTimeout(() => {
          this.test(newval)
        }, 300)
      }


    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .pageWrap
    width 100%
    height 1400px
    background: #f4f4f4

    .wrap
      display flex
      flex-direction column
      background: #fff

      .headWrap
        height 88px
        margin-top 10px
        padding 16px 50px
        box-sizing border-box
        z-index 100
        display flex
        justify-content space-between
        align-items center

        .searchInput
          width 580px
          height 60px
          border-radius 10px
          outline none
          border none
          background: no-repeat url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") #eee
          background-size 28px 28px
          background-position 40px 14px
          padding 0 15%

        .cancel
          font-size 30px
          color #000

      .history
        padding 0 20px

        span
          font-size 30px

        ul
          display flex
          flex-wrap wrap
          padding 10px

          li
            height 30px
            font-size 24px
            line-height 30px
            padding 10px
            border 1px #333 solid
            text-align: center
            margin 10px 10px

      .recResult
        padding 20px 50px

        &.searchResult-enter-active
          transition transform 0.5s

        &.searchResult-leave-active
          transition transform 3s

        &.searchResult-enter, &.fade-leave-to
          transform translateY(100px)

        .recs
          li
            font-size 30px
            font-family "Microsoft YaHei UI"
            color #7F7F7F
            line-height 60px
            width 100%
            border-bottom 1px solid #eee
            height 60px
            margin 10px 10px

    .defaultKeywords
      margin-top 30px
      padding 20px 0
      background #fff
      width 100%
      height 300px

      span
        font-size 30px
        margin-left 20px

      ul
        margin-top 30px
        display flex
        flex-wrap wrap
        // justify-content space-evenly

        li
          zoom 1
          padding 5px 10px
          border 1px solid #eee
          text-align: center
          height 30px
          line-height 30px
          white-space nowrap
          margin 10px 15px

          &.on
            zoom 1
            color #b4282d
            border #b4282d 1px solid
</style>
