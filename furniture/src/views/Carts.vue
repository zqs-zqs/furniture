<template>
  <div class="carts">
    <div v-for="(v, i) in sum" :key="i" class="carts_items">
      <div>
        <p v-if="(cart = '')">购物车为空</p>
        <div class="carts_details" v-else>
          <div class="catrs_cheaked">
            <!-- <input type="checkbox" name="shopping" id="first" /> -->
            <el-checkbox-group
              v-model="checkshop"
            >
              <!-- @change="handleCheckedCitiesChange" -->
              <el-checkbox></el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="catrs_img">
            <img src="../../public/img/living/living_item_2.webp" />
          </div>
          <div class="carts_title">
            <span>桌子</span>
          </div>
          <div class="carts_price">
            <!-- ¥{{price}} -->
            ¥{{ parseInt(price).toFixed(2) }}
          </div>
          <div class="carts_counter">
            <button @click="decrease">-</button>
            <input type="text" v-model="count" />
            <button @click="count++">+</button>
          </div>
          <div class="carts_totol">¥{{ (price * count).toFixed(2) }}</div>
          <div class="carts_delete">
            <button>删除</button>
          </div>
        </div>
      </div>
    </div>
    <div class="carts_togo">
      <button @click="go">去首页逛逛</button>
    </div>
    <div class="carts_footer">
      <div>
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          >全选</el-checkbox
        >
        <button>删除</button>
      </div>
      <div>
        <span>总计：{{ (price * count).toFixed(2) }}</span>
        <el-button type="warning">结算</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carts {
  padding-top: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #f2f2f2;
}
.carts > .carts_items {
  background-color: #fff;
  border-radius: 0.2rem;
  margin: 0.5rem 0;
}
.carts_details {
  display: flex;
  font-size: 1.2rem;
  font-weight: 600;
  color: orange;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
}
.carts_details > div {
  margin: 0 1rem;
}
.carts_details > .catrs_img {
  width: 15%;
}
.carts_details > .carts_counter > input {
  width: 5rem;
  text-align: center;
  line-height: 2.3rem;
  border: 0.5px solid #ccc;
}
.carts_details > .carts_counter > button {
  padding: 0.5rem 1rem;
  border: 0.5px solid #ccc;
}
.carts_details > .catrs_img img {
  width: 30%;
}
.carts_details > .carts_delete > button,
.carts_details > .carts_title {
  font-size: 1rem;
  color: #333;
}
.carts_delete > button {
  border: 0.5px solid #ccc;
  border-radius: 0.2rem;
  font-size: 0.8rem;
  color: #ccc !important;
  padding: 0 0.5rem;
}
.carts_togo {
  text-align: right;
  margin-right: 0.5rem;
  outline: none;
}
.carts_togo button {
  border: 0.5px solid #ccc;
  font-size: 0.8rem;
  border-radius: 0.2rem;
  color: #fff;
  font-weight: 600;
  background: orange;
  padding: 0.5rem 0.8rem;
}
.carts_footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #eee;
    border-radius: .2rem;
}
.carts_footer>div:first-child>button{
    border: .5px solid #ccc;
    margin-left: 1rem;
    border-radius: .2rem;
    color: #aaa;
}
.carts_footer>div:nth-child(2)>span{
    margin-right: 1.5rem;
}
</style>

<script>
export default {
  data() {
    return {
      price: 258,
      count: 1,
      sum: 3,
      cart: "",
      checkshop:false,
      checkAll:false,
      isIndeterminate:false
    };
  },
  methods: {
    go() {
      this.$router.push("/");
    },
    decrease() {
      if (this.count > 1) {
        this.count--;
      }
    },
    sumPrice() {
      if (sum != "") {
        this.price * this.count;
      }
    }
  },
};
</script>