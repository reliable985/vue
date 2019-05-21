import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
import zh_CN from 'vee-validate/dist/locale/zh_CN'
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    code: '验证码',
    email:''
  }
})


/*VeeValidate.Validator.extend('mobile', {
  validate: value => {
    return /^1\d{10}$/.test(value)
  },
  getMessage: field => field + '必须是11位手机号码'
})
VeeValidate.Validator.extend('mobile', {
  validate: value => {
    return /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(value)
  },
  getMessage: field => field + '必须是有效的邮箱'
})*/

