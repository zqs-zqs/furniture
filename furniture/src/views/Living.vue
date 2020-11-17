<template>
  <div>
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>客厅</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="living">
      <img src="../../public/img/living/living_index.webp" />
      <span>装扮你理想中的客厅</span>
    </div>
    <div class="living-index">
      <div class="living-index-list">
        <div class="living-index-list-search">
          <div class="my-nav">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }"
                >客厅家具</el-breadcrumb-item
              >
              <el-breadcrumb-item>bathroom furniture</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="my-inp">
            <el-input placeholder="请输入商品名称">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
        <div class="living-index-list-item">
          <el-menu :router="true">
            <el-menu-item @click="showAll">全部</el-menu-item>
            <el-menu-item @click="showPart">客厅</el-menu-item>
          </el-menu>
        </div>
        <div class="living-list" v-if="(isSelected = 'living')">
          <div class="list" v-for="(v, i) of products" :key="i">
            <router-link :to="{ path: '/details', query: { id: v.p_id } }">
              <img
                :src="require(`../../public/img/${v.p_img}.webp`)"
                v-if="v.p_img != null"
              />
            </router-link>
            <p>{{ v.p_title }}</p>
            <div>¥{{ parseInt(v.p_price).toFixed(2) }}</div>
          </div>
        </div>

        <div class="living-list" v-if="(isSelected = 'all')">
          <div class="list" v-for="(v, i) of productsAll" :key="i">
            <router-link :to="{ path: '/details', query: { id: v.p_id } }">
              <img
                :src="require(`../../public/img/${v.p_img}.webp`)"
                v-if="v.p_img != null"
              />
            </router-link>
            <p>{{ v.p_title }}</p>
            <div>¥{{ parseInt(v.p_price).toFixed(2) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.living {
  position: relative;
}
.nav {
  float: left;
  z-index: 1;
  position: absolute;
  top: 6rem;
  left: 8%;
}
.living img {
  z-index: -2;
  padding-top: 7.5rem;
  width: 100%;
  height: 380px;
}
.living span {
  font-size: 24px;
  color: rgb(129, 111, 9);
  position: absolute;
  top: 60%;
  left: 50%;
  right: 0;
  bottom: 0;
  margin-left: -50%;
}
.living-index {
  width: 100%;
  background-color: #f2f2f2;
  justify-content: center;
  display: flex;
}
.living-index-list {
  width: 90%;
  background-color: #fff;
}
.living-index-list-search {
  display: flex;
  height: 50px;
  justify-content: space-between;
  line-height: 50px;
  padding: 1rem 1rem;
}
.my-inp {
  padding-right: 1.2rem;
}
.living-index-list-search .my-nav {
  width: 50%;
  margin-top: 1.25rem;
  padding-left: 1rem;
}

.living-index-list-item .el-menu-item,
.living-index-list-item .el-submenu__title {
  padding: 0px 15px !important;
  height: 26px;
  margin: 1.5px;
  line-height: 26px;
  font-size: 0.5rem;
  color: #bdbdbd;
}

.living-index-list-item > ul {
  display: flex;
  list-style: none;
  border: 1px solid #eee;
  margin: 0.5rem 2rem;
  padding: 5px;
}
.living-index-list-item > ul > li:hover {
  background-color: orange;
  color: #fff;
}

.living-list {
  margin: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.living-list > .list {
  width: 25%;
  margin: 1rem 0;
}
.living-list > .list > p,
.living-list > .list > div {
  font-size: 14px;
  padding: 0.2rem 0;
  color: #a3a3a3;
}
.living-list > .list > a > img {
  padding: 0.5rem 0;
  width: 100%;
  transition: 0.3s;
}

.living-list > .list > a > img:hover {
  transform: scale(1.1);
}
</style>

<script>
export default {
  data() {
    return {
      isSelected: "living",
      products: [],
      productsAll: [],
    };
  },
  methods: {
    showAll() {
      this.isSelected == "all";
      this.$router.push("/");
    },
    showPart() {
      this.isSelected == "living";
      this.$router.push("/living");
    },
  },
  mounted() {
    this.axios.get("/living").then((res) => {
      // console.log(res);
      this.products = res.data.result;
      // console.log(this.products);
    });
  },
};
</script>