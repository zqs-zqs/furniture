<template>
  <div class="top">
    <el-row class="hidden-sm-and-down">
      <el-col :sm="2">
        <img src="../../public/img/open/phone.png" />
        <span>0000000</span>
      </el-col>
      <el-col :sm="3">
        <img src="../../public/img/open/time.png" />
        9:00~17:00
      </el-col>
      <el-col :offset="16" :sm="1">
        <img src="../../public/img/open/icon_lemlqeuuhb/login.png" />
        <router-link to="/login">登录</router-link>
      </el-col>
      <el-col :sm="1">
        <img src="../../public/img/open/icon_lemlqeuuhb/register.png" />
        <router-link to="/register">注册</router-link>
      </el-col>
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
  font-size: 12px;
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