<template>
  <div>
    <div class="bg-orange-500 header">
      <icon-arrow-thick-left
        color="#ffffff"
        class="icon-back"
        @click="$router.back()"
      />
      <p class="text-white font-bold text-3xl">Welcome</p>
    </div>
    <router-view />
  </div>
</template>

<script>
import IconArrowThickLeft from "../../components/Icons/IconArrowThickLeft.vue";
export default {
  components: {
    IconArrowThickLeft
  }
};
</script>

<style scoped>
.header {
  height: 180px;
  position: relative;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
.icon-back {
  position: absolute;
  width: 24px;
  top: 5px;
  left: 5px;
}
.header p {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 30px;
}
</style>
