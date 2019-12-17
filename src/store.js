import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    message: "初期メッセージ"
  },
  getters: {
    // getterを介さずに直接アクセスできるが、getterに統一するのもおすすめ。引数付きのゲッターはキャッシュを行わないため、何度もアクセスする必要のあるデータはコンポーネントの算出プロパティに登録してキャッシュするべき
    message(state) {
      return state.message;
    }
  },
  mutations: {
    // commitで呼ばれる所
    increment(state) {
      state.count++;
    },
    // どっちでも書ける(本では↑派)
    // increment: state => {
    //   state.count++;
    // }
    // mutationの呼び出しはcommit("setMessage")
    // commit("mutationType", payload)と第二引数をもたせると、アクションからも使える。
    // ex)
    // store.commit("mutationType", {id: "sasa", name: "soni"})
    // mutationType(state, {id, name}){...}
    // 引数が複数ある場合、payloadをオブジェクトとしてまとめるとよい
    setMessage(state, payload) {
      state.message = payload.message;
    }
  },
  actions: {
    // dispatchで呼ばれる所
    actionIncrement({ commit }) {
      commit("increment");
      // 呼び出しにはcommitの代わりに、ここに登録したactionを呼ぶためのdispatchを使うのも良い(直接commitできるけど、混乱しないようにdispatchに統一するのもおすすめ)
    },
    doUpdate({ commit }, message) {
      commit("setMessage", { message });
    }
  }
});
