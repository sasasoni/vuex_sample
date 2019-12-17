import Vue from "vue";
import App from "./App.vue";
// import store from "./store";
import store from "@/store";
// @はデフォルトで登録されているsrcディレクトリのエイリアス

Vue.config.productionTip = false;

// console.log(store.state.count);
// store.commit("increment");
// store.dispatch("actionIncrement") // でaction経由で使える
// // 登録したミューテーションincrementは、commitメソッドで呼び出せる
// console.log(store.state.count);

new Vue({
  // $storeとして使用できる
  store,
  render: h => h(App)
}).$mount("#app");
