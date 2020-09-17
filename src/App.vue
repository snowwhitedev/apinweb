<template>
  <div id="app" class="flex flex-col h-screen">
    <Header />
    <div class="flex flex-row">
      <SideMenu :navItems="navItems" />
      <main class="flex-1 overflow-y-auto px-5">
        <router-view />
      </main>
    </div>
    <footer class="py-0 bg-grey-300 text-center text-white">
      <Footer />
    </footer>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { provideI18n } from "./plugins/i18nPlugin";
import messages from "./lang";
import { GET_LANGUAGE } from "./store/types";
import Header from "@/components/Navigation/Header.vue";
import SideMenu from "@/components/Navigation/SideMenu.vue";
import Footer from "@/components/Navigation/Footer.vue";
import nav from "./sideitems";
export default {
  name: "Home",
  components: {
    Header,
    SideMenu,
    Footer
  },
  setup() {
    const store = useStore();
    const lang = computed(() => store.getters[GET_LANGUAGE]);

    provideI18n({
      locale: lang.value,
      messages
    });
  },
  methods: {
    async update() {
      this.prompt = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  },
  data() {
    return {
      prompt: false,
      navItems: nav.sideItems
    };
  },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.prompt = true;
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main {
  box-sizing: border-box;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
