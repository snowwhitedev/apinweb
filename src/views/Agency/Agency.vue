<template>
  <div>
    <h3 class="font-bold text-3xl text-left">My Agency</h3>
    <div class="text-left mt-4 flex flex-row">
      <div>
        <p class="font-semibold text">Name&nbsp;&nbsp;</p>
        <p class="font-semibold text mt-2">Category&nbsp;&nbsp;</p>
        <p class="font-semibold text mt-2">Address&nbsp;&nbsp;</p>
        <p class="font-semibold text mt-2">Email&nbsp;&nbsp;</p>
        <p class="font-semibold text mt-2">Telephone&nbsp;&nbsp;</p>
      </div>
      <div class="ml-4">
        <p class="font-semibold text">RESTCBON</p>
        <p class="font-semibold text mt-2">Rest Rapide</p>
        <p class="font-semibold text mt-2">59 avenue de leurope, am</p>
        <p class="font-semibold text mt-2">restcbon@gmail.com</p>
        <p class="font-semibold text mt-2">0232320232</p>
        <button
          class="bg-transparent hover:bg-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded float-right mt-4"
          @click="onEdit"
        >
          Add / Change
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    function onEdit() {
      router.push({ path: `/agency/agency_edit` });
    }
    return { onEdit };
  }
};
</script>
