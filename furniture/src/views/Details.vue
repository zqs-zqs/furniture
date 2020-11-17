<template>
  <div class="details">
    <div class="details-container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="/living">{{ product.pname }}</a></el-breadcrumb-item
        >
        <el-breadcrumb-item>{{ product.p_title }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="details_item">
        <el-row :gutter="20">
          <el-col :span="12">
            <img
              class="image"
              :src="require(`../../public/img/` + product.p_img + `.webp`)"
              v-if="product.p_img != null"
            />
          </el-col>
          <el-col :span="10">
            <p>{{ product.p_title }}</p>
            <p class="item_price">
              ¥{{ parseInt(product.p_price).toFixed(2) }}
            </p>
            <p>{{ product.p_desc }}</p>
            <p>{{ product.p_desc }}</p>
            <p>{{ product.p_desc }}</p>
            <div class="item_color">
              <span>颜色：</span>
              <div>
                <img
                  :src="require(`../../public/img/${product.p_img}.webp`)"
                  v-if="product.p_img != null"
                />
                <span>灰色</span>
              </div>
              <div>
                <img
                  :src="require(`../../public/img/${product.p_img}.webp`)"
                  v-if="product.p_img != null"
                />
                <span>蓝色</span>
              </div>
              <div>
                <img
                  :src="require(`../../public/img/${product.p_img}.webp`)"
                  v-if="product.p_img != null"
                />
                <span>绿色</span>
              </div>
            </div>
            <div class="item_cart">
              <el-button @click="add_toCart" type="warning">
                加入购物车
              </el-button>
              <button @click="reduce_item" :disabled="count == 1">-</button>
              <input type="text" v-model="count" />
              <button @click="add_item">+</button>
            </div>
            <div>
              <span>商品编号：</span>
              <span>{{ product.p_number }}</span>
            </div>
            <div>
              <span>分类：</span>
              <span>{{ product.pname }}</span>
            </div>
            <div>
              <span>总价：</span>
              <span class="item_price"
                >¥{{ (count * product.p_price).toFixed(2) }}</span
              >
            </div>
          </el-col>
        </el-row>
        <el-tabs class="item_tabs" v-model="activeName">
          <el-tab-pane label="描述" name="first">暂无描述</el-tab-pane>
          <el-tab-pane label="用户评论" name="second">暂无用户评论</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details {
  background-color: #f2f2f2;
  width: 100%;
}
.details-container {
  background-color: #f2f2f2;
  width: 90%;
  margin: 0 auto 0;
}
.details_item {
  margin: 1rem 3rem 0;
  background: #fff;
  padding: 2rem 0;
}
.el-breadcrumb {
  padding-top: 6.5rem;
  padding-left: 3rem;
  color: #666;
}
.image {
  width: 80%;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
}
.el-col > p,
.el-col > div {
  text-align: left;
  margin: 0.3rem 0;
  color: #999;
}
.item_color {
  display: flex;
  font-size: 0.8rem;
  align-items: center;
}
.item_color > div {
  width: 25%;
  text-align: center;
  border: 1px solid lightGray;
  margin: 0 auto;
}
.item_cart a {
  text-decoration: none;
  padding: 0.5rem 3.5rem;
  border: 0;
  background: orange;
  border: 1px solid orange;
  margin-right: 1.2rem;
  border-radius: 0.2rem;
  color: #fff;
}
.item_cart > button {
  padding: 0.5rem;
  border: 1px solid lightGray;
  border-radius: 0.2rem;
  color: #333;
}
.item_cart>button:first-child{
  padding: .6rem .7rem;
  color: #fff;
  font-size: 1rem;
  margin-right: .2rem;
}
.item_cart > input {
  text-align: center;
  width: 15%;
  padding: 0.5rem 0;
  border-radius: 0.2rem;
  border: 1px solid lightGray;
}
.item_color img {
  width: 30%;
}
.item_price {
  font-size: 1.5rem;
  color: orange !important;
}
.right > div img {
  width: 100%;
}
.right > div p {
  text-align: center;
  color: orange;
  margin-top: -1rem;
  font-size: 1.2rem;
}
.item_tabs {
  margin: 0 10rem 0 2.5rem;
}
</style>

<script>
export default {
  data() {
    return {
      activeName: "first",
      product: {},
      count: 1,
    };
  },
  methods: {
    add_item() {
      this.count++;
    },
    reduce_item() {
      this.count--;
    },
    add_toCart(){
    let id = this.$route.query.id;
    let obj={
      id:id,
      count:this.count,
      img:this.product.p_img,
      title:this.product.p_title,
      price:this.product.p_price
    }
    console.log(id,this.count);
    console.log(obj);
    this.axios.post("/cart", this.qs.stringify(obj)).then((res) => {
      console.log(res);
      if(res.data.code==1){
        this.$message({
          message:'添加成功',
          type:'success'
        })
      }
    });
    }
  },
  mounted() {
    let id = this.$route.query.id;
    this.axios.get("/list", { params: { id: id } }).then((res) => {
      this.product = res.data.result[0];
    });

  },
};
</script>