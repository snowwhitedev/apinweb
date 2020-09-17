import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import lang from "./lang";

const vuexLocal = new VuexPersistence({
  key: "vuex",
  storage: window.localStorage
  // reducer: state => {
  //   return {};
  // }
});

export default createStore({
  modules: {
    lang
  },
  plugins: [vuexLocal.plugin]
});
