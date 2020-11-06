<template>
  <div class="register">
    <div>
      <el-input class="register_inp" v-model="uname" placeholder="请输入用户名"></el-input>
      <el-input class="register_inp" v-model="password" placeholder="请输密码"></el-input>
      <el-input class="register_inp" v-model="conpassword" placeholder="请再次确认密码"></el-input>
    </div>

    <div>
      <el-button type="warning">免费注册</el-button>
    </div>
  </div>
</template>

<style scoped>
.register {
  width: 34%;
  padding: 12rem 33% 5rem;
  background: #f2f2ff;
}
.register .register_inp{
    margin: .5rem 0;
}
</style>

<script>
export default {
    data(){
        return {
            uname:'',
            password:'',
            conpassword:''
        }
    }
}
</script>