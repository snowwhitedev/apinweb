<template>
  <div class="phone-input">
    <input
      type="text"
      v-model="phoneNumber"
      @change="numberChange"
      class="border border-gray-800 rounded py-1 w-full"
    />
    <select class="prefix" v-model="prefixCode" @change="changeCountry">
      <option v-for="code in codes" :key="code" :value="code">
        {{ code }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    prefix: {
      type: String,
      default: ""
    },
    number: {
      type: String,
      default: ""
    },
    codes: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const prefixCode = ref(props.prefix);
    const phoneNumber = ref(props.number);

    function changeCountry(e) {
      emit("codechange", e.target.value);
    }
    function numberChange(e) {
      emit("numberchange", e.target.value);
    }

    return { prefixCode, phoneNumber, changeCountry, numberChange };
  }
};
</script>

<style scoped>
.phone-input {
  position: relative;
}
input {
  display: flex;
  align-items: center;
  padding-left: 60px;
}
.prefix {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
}
select:focus {
  outline: none;
}
</style>
