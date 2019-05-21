<template>
  <div class="login_box">
    <Header/>
    <div class="phone_login_box">
      <div class="top_logo"><img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="netease"/></div>

      <label class="input_phone">
        <div class="login_tips">
          <p></p>
          <p></p>
        </div>
        <input v-model="phone" name="phone" v-validate="{required: true,regex: /^((13|14|15|17|18)[0-9]{1}\d{8})$/}" type="text" placeholder="请输入手机号" />
        <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
      </label>

      <label class="input_code">
        <input  type="text" placeholder="请输入手机验证码"  />
        <button class="get_phone_code" :disabled="!show || timer >0" @click="getCode">
          {{timer>0?`剩余(${timer})s`:'获取验证码'}}
        </button>
      </label>
      <div class="login_help">
        <span>遇到问题? </span>
        <span>使用密码验证登录</span>
      </div>
      <div class="login_btn active" >登录</div>
      <div class="back_btn" @click="$router.push('/personage')" >其他登录方式</div>
      <div class="register_btn">注册账号 &gt;</div>
    </div>


  </div>

</template>

<script>
  import Header from 'pages/Personage/CommonHeader/Header'
  export default {
    name: "Login",
    components: {
      Header
    },
    data(){
      return{
        phone:'',
        show: true,
        timer: null,
      }
    },
    methods:{
      getCode(){
        this.timer=30
        //启动循环定时器每隔1s减少1
        const times= setInterval(()=>{
          this.timer--
          if (this.timer===0){
            clearInterval(times)
          }
        },1000)

      }

    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .phone_login_box
    background-color: #fff
    .top_logo
      width 100%
      height 133px
      margin 56px 0 135px 0
      img
        width 192px
        height 64px
        margin 0 auto
    .input_phone
      position relative
      .login_tips
        position absolute
        left 50%
        top -100%
        width 50%
        transform translateX(-50%)
        color $themeColor
        font-size 28px
    .input_phone,
    .input_code
      display block
      width 675px
      height 90px
      margin 30px auto
      input
        display block
        width 100%
        height 100%
        outline none
        border 0 none
        border-bottom 1px solid #bdbdbd
        font-size 30px
        line-height 45px
    .input_code
      position relative
      .get_phone_code
        position absolute
        right 0
        bottom 0
        width 173px
        height 56px
        line-height 56px
        text-align center
        font-size 28px
        border 1px solid #333
        border-radius  10px
    .login_help
      font-size 28px
      line-height 45px
      margin-bottom 64px
      padding 0 30px
      display flex
      justify-content space-between
      align-items center
    .login_btn,
    .back_btn
      width 677px
      height 96px
      margin-top 32px
      color $themeColor
      margin-left 30px
      font-size 28px
      display flex
      justify-content center
      align-items center
      border 1px solid $themeColor
      &.active
        color #fff
        background-color $themeColor
    .register_btn
      margin-top 32px
      font-size 28px
      line-height 40px
      color #333
      text-align center
</style>
