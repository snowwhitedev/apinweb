<template>
  <div>
    <div>
      {{ i18n.$t("translation1") }}
    </div>
    <p class="text-left font-semibold">Select Language</p>
    <select
      class="border border-teal-500 w-full rounded p-2 mt-1"
      v-model="selectedLang"
      @change="changeLang"
    >
      <option v-for="la in langs" :key="la" :value="la">
        {{ la }}
      </option>
    </select>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "../plugins/i18nPlugin";
import { SET_LANGUAGE, GET_LANGUAGE } from "../store/types";
import { LANGS } from "../store/constant";
export default {
  setup() {
    const store = useStore();
    const lang = computed(() => store.getters[GET_LANGUAGE]);
    const i18n = useI18n();
    const langs = ref(LANGS);
    const selectedLang = ref();

    selectedLang.value = lang.value;
    i18n.locale.value = lang.value;

    function changeLang() {
      store.commit(SET_LANGUAGE, selectedLang.value);
      i18n.locale.value = selectedLang.value;
    }
    return { i18n, langs, selectedLang, changeLang };
  }
};
</script>
