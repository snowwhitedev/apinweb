import { createRouter, createWebHistory } from "vue-router";
import RouterView from "../layout/RouterView.vue";

import Help from "../views/Help.vue";
import Home from "../views/Home.vue";
import Agency from "../views/Agency/Agency.vue";
import AgencyForm from "../views/Agency/AgencyForm.vue";
import Provider from "../views/Agency/Provider.vue";
import Service from "../views/Agency/Service.vue";

import Profile from "../views/Profile/Profile.vue";
import Connect from "../views/Profile/Connect.vue";
import Register from "../views/Profile/Register.vue";
import About from "../views/About.vue";
import Settings from "../views/Settings.vue";

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_ROUTE),
  routes: [
    {
      path: "/home",
      alias: "",
      component: Home
    },
    {
      path: "/agency",
      name: "agency",
      component: RouterView,
      children: [
        {
          alias: "",
          path: "",
          name: "agency-content",
          component: Agency
        },
        {
          path: "agency_edit",
          name: "agency-edit",
          component: AgencyForm
        },
        {
          path: "provider",
          name: "agency-provider",
          component: Provider
        },
        {
          path: "service",
          name: "agency-service",
          component: Service
        }
      ]
    },

    {
      path: "/help",
      component: Help
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      children: [
        {
          alias: "",
          path: "connect",
          name: "profile-connect",
          component: Connect
        },
        {
          path: "register",
          name: "profile-register",
          component: Register
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    }
  ]
});

export default router;
