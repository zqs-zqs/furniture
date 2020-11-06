<template>
  <div>
    <div class="cooking">
      <el-breadcrumb separator="/" class="nav-start">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/cooking' }">厨房</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="cooking-swiper">
      <img src="../../public/img/cooking/index.webp" />
      <span>迎接全新的厨房吧</span>
    </div>
    <div class="cooking-index">
      <div class="cooking-index-list">
        <div class="cooking-index-list-search">
          <div class="cooking-nav">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }"
                >厨房家具</el-breadcrumb-item
              >
              <el-breadcrumb-item>cookroom furniture</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="my-inp">
            <el-input placeholder="请输入商品名称">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
        <div class="cooking-index-list-item">
          <el-menu>
            <el-menu-item index="1">全部</el-menu-item>
            <el-menu-item index="2">客厅</el-menu-item>
            <el-menu-item index="3">卧室</el-menu-item>
            <el-menu-item index="4">餐厅</el-menu-item>
            <el-menu-item index="5">厨房</el-menu-item>
            <el-menu-item index="6">浴室</el-menu-item>
          </el-menu>
        </div>
        <div class="cooking-list">
          <div class="list" v-for="(v,i) of products" :key="i">
            <router-link :to="{path:'/details',query:{id:v.p_id}}">
              <img :src="require(`../../public/img/${v.p_img}.webp`)" v-if="v.p_img != null"/>
            </router-link>
            <p>{{v.p_title}}</p>
            <div>¥{{parseInt(v.p_price).toFixed(2)}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cooking-swiper {
  position: relative;
}
.cooking {
  float: left;
  z-index: -2;
  position: absolute;
  top: 6rem;
  left: 2%;
}
.cooking-swiper img {
  z-index: -2;
  position: flex;
  padding-top: 7.5rem;
  width: 100%;
  height: 380px;
}
.cooking-swiper span {
  font-size: 24px;
  color: rgb(129, 111, 9);
  position: absolute;
  top: 60%;
  left: 50%;
  right: 0;
  bottom: 0;
  margin-left: -50%;
}
.cooking-index {
  width: 100%;
  background-color: #f2f2f2;
  justify-content: center;
  display: flex;
}
.cooking-index-list {
  width: 90%;
  background-color: #fff;
}
.cooking-index-list-search {
  display: flex;
  height: 50px;
  line-height: 50px;
  padding: 1rem 1rem;
}
.my-inp {
  padding-left: 17rem;
}
.cooking-index-list-search .cooking-nav {
  width: 50%;
  margin-top: 1.25rem;
  padding-left: 1rem;
}

.cooking-index-list-item .el-menu-item,
.cooking-index-list-item .el-submenu__title {
  padding: 0px 15px !important;
  height: 26px;
  margin: 1.5px;
  line-height: 26px;
  font-size: 0.5rem;
  color: #bdbdbd;
}

.cooking-index-list-item > ul {
  display: flex;
  list-style: none;
  border: 1px solid #eee;
  margin: 0.5rem 2rem;
  padding: 5px;
}
.cooking-index-list-item > ul > li:hover {
  background-color: orange;
  color: #fff;
}

.cooking-list {
  margin: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
.cooking-list > .list {
  width: 25%;
  margin: 1rem 0;
}
.cooking-list > .list > p,
.cooking-list > .list > div {
  font-size: 14px;
  padding: 0.2rem 0;
  color: #a3a3a3;
}
.cooking-list > .list > a > img {
  padding: 0.5rem 0;
  width: 100%;
  transition: 0.3s;
}

.cooking-list > .list > a > img:hover {
  transform: scale(1.1);
}
</style>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.axios.get("/cook").then((res) => {
      this.products = res.data.result;
    });
  },
};
</script>