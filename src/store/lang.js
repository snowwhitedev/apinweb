import { LANGS } from "./constant";
import { SET_LANGUAGE, GET_LANGUAGE } from "./types";
const state = {
  selectedLang: LANGS[0]
};

const mutations = {
  [SET_LANGUAGE](state, payload) {
    state.selectedLang = payload;
  }
};

const getters = {
  [GET_LANGUAGE]: state => state.selectedLang
};

export default {
  state,
  mutations,
  getters
};
