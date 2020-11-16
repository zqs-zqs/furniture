import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts:[],
    id:'',
    count:1,
    isLogined:localStorage.getItem('isLogin')?localStorage.getItem('isLogin'):0,
    // u_nickname:localStorage.getItem('u_nickname')?localStorage.setItem('u_nickname'):""
  },
  getters:{
    cart(state){
      state.cart = sessionStorage.getItem("cart")
      return state.cart
    }
  },
  mutations: {
    Logined(state,payload){
      state.isLogined=1;
      state.u_nickname=payload.u_nickname==null ? (payload.u_nickname==null ? payload.phone:payload.u_nickname) :payload.u_nickname;
      localStorage.setItem('u_nickname',payload.u_nickname==null ? payload.u_nickname:payload.u_nickname);
    },
    LoginOut(state){
      state.isLogined=0;
    },
    // carts(state,payload){
    //   localStorage.setItem("cart", JSON.stringify(payload))
    //   state.cart=payload;
      
    // },
    add_cartItem(state,payload){
      let id=payload.id;
      let count=payload.count;
      // state.carts = localStorage.getItem("carts");
      state.carts=payload.id==null?(localStorage.getItem("carts")):localStorage.getItem("carts").concat

      // return state.carts
    }
  },
  actions: {
    add_cartItem ({ commit }) {
      commit('increment')
      this.axios.get("/cart", { params: { id: payload.id } }).then((res) => {
        let cart_item = res.data.result;
      });
    }
  },
  modules: {
  }
})
