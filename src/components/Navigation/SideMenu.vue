<template>
  <div class="side-menu pl-3">
    <ul class="text-left">
      <li v-for="navItem in navItems" :key="navItem.name">
        <router-link :to="navItem.link">
          {{ navItem.name }}
        </router-link>
        <ul v-if="navItem.children" class="pl-3">
          <li v-for="subItem in navItem.children" :key="subItem.name">
            <router-link :to="subItem.link">{{ subItem.name }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style scoped>
.side-menu {
  padding-top: 30px;
  height: calc(100vh - 60px - 68px);
  border: 1px solid #cccccc;
  width: 260px;
}
</style>
