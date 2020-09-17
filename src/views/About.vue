<template>
  <div class="border border-teal-500 h-full rounded p-4">
    <div v-if="!isError">
      <p class="font-bold text-teal-600 text-2xl">Who we are</p>
      <p class="mt-5 font-semibold text-teal-800 text-xl">{{ agency.name }}</p>
      <p class="mt-5 font-semibold text-teal-800 text-xl">{{ agency.phone }}</p>
      <p class="mt-5 font-semibold text-teal-800 text-xl">{{ agency.email }}</p>
    </div>
    <div v-if="isError">
      <p class="mt-5 font-semibold text-red-600 text-lg">
        Oops! Sorry, something went wrong.
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "../axios";
export default {
  setup() {
    const agency = reactive({
      name: null,
      phone: null,
      email: null
    });
    const isError = ref(false);

    axios.get(`agency/${process.env.VUE_APP_AGENCY_ID}`).then(
      res => {
        agency.name = res.data.data.items[0].name;
        agency.phone = res.data.data.items[0].phone;
        agency.email = res.data.data.items[0].email;
      },
      err => {
        console.log("[error]", err);
        isError.value = true;
      }
    );
    return { agency, isError };
  }
};
</script>
