<template>
  <div class="carts">
    <tr class="carts_header">
      <th>选择</th>
      <th>商品</th>
      <th>单价</th>
      <th>数量</th>
      <th>小计</th>
      <th>操作</th>
    </tr>
    <div class="carts_items" v-for="(v, i) of carts" :key="i">
      <p v-if="carts.length == 0">购物车为空</p>
      <div v-else>
        <div class="carts_details">
          <div class="catrs_cheaked">
            <input type="checkbox" @click="ischeck" name="shopping" />
          </div>
          <div class="catrs_img">
            <img
              :src="require(`../../public/img/${v.p_img}.webp`)"
              v-if="v.p_img != null"
            />
          </div>
          <div class="carts_title">
            <span>{{ v.p_title }}</span>
          </div>
          <div class="carts_price">¥{{ parseInt(v.p_price).toFixed(2) }}</div>
          <div class="carts_counter">
            <button @click="v.c_count--" :disabled="v.c_count == 1">-</button>
            <input type="text" maxlength="5" v-model="v.c_count" />
            <button @click="v.c_count++">+</button>
          </div>
          <div class="carts_totol">
            ¥{{ (v.p_price * v.c_count).toFixed(2) }}
          </div>
          <div class="carts_delete">
            <button @click="to_delete(i)">删除</button>
          </div>
        </div>
      </div>
    </div>
    <div class="carts_footer">
      <div>
        <input type="checkbox" v-model="checkAll" @click="check_all" />全选
        <button :disabled="checkAll==false" @click="check">删除</button>
      </div>
      <div>
        <span>总计：¥{{ sum }}</span>
        <el-button type="warning" @click="check">结算</el-button>
        <el-button type="text" @click="open"></el-button>
      </div>
    </div>
    <div class="carts_togo">
      <button @click="go">去首页逛逛</button>
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
.carts > .carts_header {
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
}
.carts > .carts_header > th:first-child {
  text-align: left;
  margin-left: 2rem;
  width: 10%;
}
.carts > .carts_header > th:nth-child(2) {
  width: 28%;
  text-align: center;
}
.carts > .carts_header > th:nth-child(3) {
  width: 10%;
  text-align: center;
}
.carts > .carts_header > th:nth-child(4) {
  width: 25%;
  text-align: center;
}
.carts > .carts_header > th:nth-child(5) {
  width: 12%;
  text-align: center;
}
.carts > .carts_header > th:last-child {
  width: 10%;
  text-align: center;
}
.carts > .carts_items {
  background-color: #fff;
  border-radius: 0.2rem;
  margin: 0.5rem 0;
}
.carts > .carts_items > div > p:first-child {
  padding: 1rem;
  border-radius: 0.2rem;
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
  /* flex: 1; */
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
  text-align: center;
  margin-right: 0.5rem;
  outline: none;
}
.carts_togo button {
  border: 0.5px solid #ccc;
  font-size: 1rem;
  border-radius: 0.2rem;
  color: #fff;
  font-weight: 600;
  background: orange;
  padding: 0.5rem 0.8rem;
}
.carts_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #eee;
  border-radius: 0.2rem;
}
.carts_footer > div:first-child > button {
  border: 0.5px solid #ccc;
  margin-left: 1rem;
  border-radius: 0.2rem;
  color: #aaa;
}
.carts_footer > div:nth-child(2) > span {
  margin-right: 1.5rem;
}
</style>

<script>
export default {
  data() {
    return {
      carts: [], //返回的商品信息
      count: 1, //商品数量
      id: 1, //商品id
      isCheck: false, //单个商品是否选中
      // checked:0,//单个商品选中的个数
      checkAll: false, //全选按钮是否选中
      sum:0
    };
  },
  computed: {
    totalPrice() {
      //计算当前页面总价
      //  this.ischeck();
      // let total = 0;
      // let checks = document.getElementsByName("shopping");
      // for (var i = 0; i < this.carts.length; i++) {
        // let item = this.carts[i];
        //  console.log(item.checked);
        // if (item.checked == true) {
          // console.log(item.checked);
          // total += item.p_price * item.c_count;
        // }
      // }
      // return total.toString().replace(/\B(?=(\d{3})+$)/g, ",");
    },
  },
  methods: {
    // 判断单个商品是否被选中，以及对选中状态的修改
    ischeck() {
      let checks = document.getElementsByName("shopping");
      let aa = 0;
      let bb=0;
      for (let index = 0; index < checks.length; index++) {
        if (checks[index].checked == true) {
          aa++;
          bb+=this.carts[index].c_count*this.carts[index].p_price;
        }
        // console.log(checks[index].checked);
      }
      this.sum=bb;
      // console.log(this.carts,bb);
      if (aa == this.carts.length) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
    },
    // 全选按钮
    check_all() {
      let checks = document.getElementsByName("shopping");
      let bb=0;
      if (this.checkAll == true) {
        for (let index = 0; index < checks.length; index++) {
          checks[index].checked = false;
          bb+=this.carts[index].c_count*this.carts[index].p_price;
        }
      } else {
        for (let index = 0; index < checks.length; index++) {
          checks[index].checked = true;
          bb+=this.carts[index].c_count*this.carts[index].p_price;
        }
      }
      this.sum=bb;
    },
    // 返回首页
    go() {
      this.$router.push("/");
    },
    open() {
        this.$alert('操作成功', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push('/')
          }
        });
      },
    // 删除单个商品
    to_delete(i) {
      this.carts.splice(i, 1);
    },
    check() {
      this.axios.get("/clear").then((res) => {
        // setTimeout(() => {
          if (res.data.code == 1) {
            this.open();
          }
        // }, 1000);
      });
    },
  },
  mounted() {
    // 向后台请求当前页面商品信息，并存储在carts数组中
    this.axios.get("/carts").then((res) => {
      // console.log(res.data.result);
      this.carts = res.data.result;
    });
  },
};
</script>