<template>
  <div>
    <div class="dining">
      <el-breadcrumb separator="/" class="nav-start">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/dining' }">餐厅</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="dining-swiper">
      <img src="../../public/img/dining/index.webp" />
      <span>分享美食与欢聚时刻</span>
    </div>
    <div class="dining-index">
      <div class="dining-index-list">
        <div class="dining-index-list-search">
          <div class="dining-nav">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }"
                >餐厅家具</el-breadcrumb-item
              >
              <el-breadcrumb-item>diningroom furniture</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="my-inp">
            <el-input placeholder="请输入商品名称">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
        <div class="dining-index-list-item">
          <el-menu>
            <el-menu-item @click="showAll">全部</el-menu-item>
            <el-menu-item @click="showPart">餐厅</el-menu-item>
          </el-menu>
        </div>
        <div class="dining-list">
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
.dining-swiper {
  position: relative;
}
.dining {
  float: left;
  z-index: 1;
  position: absolute;
  top: 6rem;
  left: 8%;
}
.dining-swiper img {
  z-index: -2;
  padding-top: 7.5rem;
  width: 100%;
  height: 380px;
}
.dining-swiper span {
  font-size: 24px;
  color: rgb(129, 111, 9);
  position: absolute;
  top: 60%;
  left: 50%;
  right: 0;
  bottom: 0;
  margin-left: -50%;
}
.dining-index {
  width: 100%;
  background-color: #f2f2f2;
  justify-content: center;
  display: flex;
}
.dining-index-list {
  width: 90%;
  background-color: #fff;
}
.dining-index-list-search {
  display: flex;
  height: 50px;
  line-height: 50px;
  padding: 1rem 1rem;
}
.my-inp {
  padding-left: 17rem;
}
.dining-index-list-search .dining-nav {
  width: 50%;
  margin-top: 1.25rem;
  padding-left: 1rem;
}

.dining-index-list-item .el-menu-item,
.dining-index-list-item .el-submenu__title {
  padding: 0px 15px !important;
  height: 26px;
  margin: 1.5px;
  line-height: 26px;
  font-size: 0.5rem;
  color: #bdbdbd;
}

.dining-index-list-item > ul {
  display: flex;
  list-style: none;
  border: 1px solid #eee;
  margin: 0.5rem 2rem;
  padding: 5px;
}
.dining-index-list-item > ul > li:hover {
  background-color: orange;
  color: #fff;
}

.dining-list {
  margin: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
.dining-list > .list {
  width: 25%;
  margin: 1rem 0;
}
.dining-list > .list > p,
.dining-list > .list > div {
  font-size: 14px;
  padding: 0.2rem 0;
  color: #a3a3a3;
}
.dining-list > .list > a > img {
  padding: 0.5rem 0;
  width: 100%;
  transition: 0.3s;
}

.dining-list > .list > a > img:hover {
  transform: scale(1.1);
}
</style>

<script>
export default {
  data() {
    return {
      products: [],
      isSelected: "dining"
    };
  },
  methods:{
    showAll() {
      this.isSelected == "all";
      this.$router.push("/");
    },
    showPart() {
      this.isSelected == "dining";
      this.$router.push("/dining");
    },
  },
  mounted() {
    this.axios.get("/dining").then((res) => {
      this.products = res.data.result;
    });
  },
};
</script>