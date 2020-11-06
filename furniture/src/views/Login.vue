<template>
    <div class="login">
        <el-input class="login_inp" @blur="checkUname" v-model="uname" placeholder="用户名"></el-input>
        <el-input class="login_inp" @blur="checkPassword" type="password" placeholder="密码" v-model="password"></el-input>
        <el-button type="warning" size="small" @click="handle">登录</el-button>
    </div>
</template>

<style scoped>
.login{
    width:34%;
    padding: 12rem 33% 5rem;
    background: #f2f2ff;
}
.login .login_inp{
    margin: .8rem 0;
}
</style>

<script>
export default {
    data(){
        return {
            uname:'',
            password:''
        }
    },
    methods:{
        checkUname(){
            let unameRegExp = /^[0-9a-zA-Z_]{8,12}$/;
            if(unameRegExp.test(this.uname)){
                return true;
            }else{
                console.log('格式错误，请输入8~12位数字或字母或数字和字母组合')
                return false
            }
        },
        checkPassword(){
            let passwordRegExp = /^[0-9a-zA-Z_]{6,9}$/;
            if(passwordRegExp.test(this.password)){
                return true;
            }else{
                console.log('格式错误，请输入6~9位数字或字母或数字和字母组合')
                return false
            }
        },
        handle(){
            if(this.checkUname() && this.checkPassword()){
                axios.post('/login',{uname:'uname',password:'password'}).then(res=>{
                    consle.log(res.data)
                })
            }
        }
    }
}
</script>