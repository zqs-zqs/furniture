<template>
  <div class="index">
    <el-row>
      <el-col>
        <el-carousel arrow="hover">
          <el-carousel-item
            ><img src="../../public/img/index/bg1.webp" alt=""
          /></el-carousel-item>
          <el-carousel-item
            ><img src="../../public/img/index/bg2.webp" alt=""
          /></el-carousel-item>
          <el-carousel-item
            ><img src="../../public/img/index/bg3.webp" alt=""
          /></el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <div class="items">
      <div>商品列表</div>
    </div>
    <div class="item_show">
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
  </div>
</template>

<style scoped>
.index {
  padding-top: 8rem;
  background: #f2f2f2;
}
.index > .items {
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  color: coral;
  padding: 1rem 0;
}
.index > .items_show {
  margin: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.index > .items_show > .list {
  width: 25%;
  margin: 1rem 0;
}
.index > .items_show  > .list > p,
.index > .items_show  > .list > div {
  font-size: 14px;
  padding: 0.2rem 0;
  color: #a3a3a3;
}
.index > .items_show > .list > a > img {
  padding: 0.5rem 0;
  width: 100%;
  transition: 0.3s;
}

.index > .items_show  > .list > a > img:hover {
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
    this.axios.get("/").then((res) => {
      console.log(res);
      this.products = res.data.result;
      // console.log(this.products);
    });
  },
};
</script>