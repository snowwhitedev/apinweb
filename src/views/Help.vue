<template>
  <div class="help mt-5">
    <div>
      <button
        class="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
        type="button"
        @click="onProfile"
      >
        Profile
      </button>
    </div>
    <div class="mt-4">
      <button
        class="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
        type="button"
        @click="onAbout"
      >
        Who we are
      </button>
    </div>
    <div class="mt-4">
      <button
        class="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
        type="button"
        @click="
          () => {
            $router.push({ path: `/mybooking` });
          }
        "
      >
        Retrieve my booking
      </button>
    </div>
    <div class="mt-4">
      <button
        class="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
        type="button"
        @click="
          () => {
            $router.push({ path: `/settings` });
          }
        "
      >
        Settings
      </button>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    function onProfile() {
      router.push({ path: "/profile" });
    }

    function onAbout() {
      router.push({ path: "/about" });
    }

    return { onProfile, onAbout };
  }
};
</script>
