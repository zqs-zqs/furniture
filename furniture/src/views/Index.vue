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
  padding-top: 6rem;
  background: #f2f2f2;
}
.index > .items {
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  color: coral;
  padding: 1rem 0;
}
.item_show{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 1rem 2rem 0;
  background: #fff;
  font-family: 'Courier New', Courier, monospace;
  font-size: .5rem;
  color: #666666;
  border-radius: .5rem;
}
.item_show>.list{
  width: 20%;
  padding: 1.5rem;
}
.item_show>.list>a>img{
  padding: 0.5rem 0;
  width: 100%;
  transition: 0.3s;
}
.item_show>.list>a>img:hover{
  transform: scale(1.1);
}
.item_show>.list>p{
  margin: .6rem auto .3rem;
}
.item_show>.list>div{
  color: coral;
  font-size: 1rem;
  font-weight: 600;
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
      // console.log(res);
      this.products = res.data.result;
      // console.log(this.products);
    });
  },
};
</script>