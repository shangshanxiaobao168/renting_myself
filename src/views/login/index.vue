<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="账号登陆" @click-left="onClickLeft" left-arrow />
    <!-- /导航栏 -->
    <!-- 登陆表单 -->
    <!-- form标签，vant进行了封装 -->
    <van-form @submit="onSubmit">
      <!-- field是输入框 ，v-model用来绑定数据，label对应左侧提示文本，rules输入框的验证消息，
    required是指必填项，message是指填写错误的提示信息-->
      <van-field name="账号" placeholder="请输入账号" />
      <van-field type="password" name="密码" placeholder="请输入密码" />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登陆</van-button>
      </div>
    </van-form>
    <!-- /登陆表单 -->
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {}
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="scss" scoped></style>
