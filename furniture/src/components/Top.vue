<template>
  <div class="top">
    <el-row class="hidden-sm-and-down">
      <div>
        <el-col>
          <el-button icon="el-icon-phone-outline"></el-button>
          <span>0000000</span>
        </el-col>
        <el-col>
          <el-button icon="el-icon-time"></el-button>
          <span>9:00~17:00</span>
        </el-col>
      </div>
      <div>
        <el-col>
          <el-button icon="el-icon-user-solid"></el-button>
          <router-link to="/login" v-if="this.$store.state.isLogined==0">登录</router-link>
          <el-button v-else>您好</el-button>
        </el-col>
        <el-col>
          <el-button icon="el-icon-user"></el-button>
          <router-link to="/register" v-if="this.$store.state.isLogined==0">注册</router-link>
          <el-button @click="loginOut" v-else>退出</el-button>
        </el-col>
        <el-col>
          <el-button @click="myCart" :disabled="this.$store.state.isLogined==1 && this.$route.path=='/cart'" icon="el-icon-shopping-cart-full">购物车</el-button>
          <el-button type="text" @click="open" v-if="this.$store.state.isLogined==0"></el-button>
        </el-col>
      </div>
    </el-row>

    <div class="top-header">
      <div>
        <img src="../../public/img/logo.webp" />
      </div>
      <el-menu
        :router="true"
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="/living">客厅</el-menu-item>    
        <el-menu-item index="/bed">卧室</el-menu-item>
        <el-menu-item index="/dining">餐厅</el-menu-item>
        <el-menu-item index="/cook">厨房</el-menu-item>
        <el-menu-item index="/bath">浴室</el-menu-item>
        <el-submenu index="6">
          <template slot="title">关于</template>
          <el-menu-item index="6-1">常见问题</el-menu-item>
          <el-menu-item index="6-2">支付方式</el-menu-item>
          <el-menu-item index="6-3">加盟方式</el-menu-item>
          <el-menu-item index="6-4">联系我们</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<style scoped>
.el-button [class*=el-icon-]+span {
    margin-left: 0px !important;
}
.top {
  z-index: 1;
  font-size: 12px;
  position: fixed;
  background: #fff;
  width: 100%;
  line-height: 30px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
}
.top > .hidden-sm-and-down {
  background: #f9f9f9 none repeat center center;
  color: #a3a3a3;
  display: flex;
  justify-content:start;
  font-size: 12px;
}
.top > .hidden-sm-and-down>div{
  display: flex;
  justify-content: space-around;
}
.top > .hidden-sm-and-down>div:first-child{
  width: 21%;
  display: flex;
  justify-content: start;
}
.top > .hidden-sm-and-down>div:last-child{
  margin-left: 66%;
  display: flex;
  justify-content: space-between;
}
.top a {
  color: #a3a3a3;
  text-decoration: none;
}
.top img {
  margin: 0px 0px -2px 0;
}
.top > .top-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}
.top > .top-header img {
  padding: 0 0 0 1.5rem;
}
.top > .top-header > ul {
  border: 0;
  display: flex;
}
.top button{
  font-size: .5rem;
  padding: 0;
  margin: 0;
  color: #a3a3a3;
  border: 0;
}
.top > .top-header > ul > li:hover,
.el-submenu .el-menu-item:hover {
  background-color: orange;
  color: #fff;
  border: 0;
}
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid orange;
    color: #303133;
}
.el-submenu .el-menu-item {
  line-height: 50px;
  padding: 0 30px;
  min-width: 100px;
}
.el-submenu {
  height: 0;
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex:"/living",
      navs: [],
      products:[]
    };
  },
  methods:{
    loginOut(){
        this.$store.commit("LoginOut");
        localStorage.setItem('isLogin',"0")
        this.$message('已退出登录')    
    },
    myCart(){
      if(this.$store.state.isLogined==0){
        if(this.$route.path=='/login'){
          this.$message('请先登录')
        }else{
          this.open()
        }
      }else{
        this.$router.push('/cart')
      }
    },
    open(){
      this.$confirm('进入登录页面, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  },
  mounted() {
    this.axios.get("/top").then((res) => {
      // console.log(res);
      this.navs = res.data.res;
      // console.log(this.navs);
    });

    // this.axios.get('/').then(res=>{
    //    console.log(res);
    //   this.products = res.data.result
    //   console.log(this.products);
    //   });
  },
};
</script>