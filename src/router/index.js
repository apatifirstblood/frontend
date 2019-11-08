import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import store from "../store/index.js"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import("../views/Signup.vue")
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: () =>
      import("../views/ForgotPassword.vue")
  },
  {
    path: "/start-migration",
    name: "startMigration",
    component: () =>
      import("../views/StartMigration.vue"),
      meta: {
        requiresAuth: true
      }
  },
  {
    path: "/account-verification",
    name: "accountVerification",
    component: () =>
      import("../views/AccountVerification.vue"),
      meta: {
        requiresAuth: true
      }
  },
  {
    path: "/account-verification-complete",
    name: "accountVerificationComplete",
    component: () =>
      import("../views/AccountVerificationComplete.vue"),
      meta: {
        requiresAuth: true
      }
  },
  {
    path: "/ready-for-migration-1",
    name: "readyForMigration1",
    component: () =>
      import("../views/ReadyForMigration/ReadyForMigration1.vue"),
      meta: {
        requiresAuth: true
      }
  },
  {
    path: "/ready-for-migration-2",
    name: "readyForMigration2",
    component: () =>
      import("../views/ReadyForMigration/ReadyForMigration2.vue"),
      meta: {
        requiresAuth: true
      }
  },
  {
    path: "/ready-for-migration-3",
    name: "readyForMigration3",
    component: () =>
      import("../views/ReadyForMigration/ReadyForMigration3.vue"),
      meta: {
        requiresAuth: true
      }
  },
  {
    path: "/token-migration-1",
    name: "tokenMirgration1",
    component: () =>
      import("../views/TokenMigration/TokenMigration1.vue"),
      meta: {
        requiresAuth: true
      }
  },
  {
    path: "/token-migration-2",
    name: "tokenMigration2",
    component: () =>
      import("../views/TokenMigration/TokenMigration2.vue"),
      meta: {
        requiresAuth: true
      }
  },
  {
    path: "/token-migration-3",
    name: "tokenMigration3",
    component: () =>
      import("../views/TokenMigration/TokenMigration3.vue"),
      meta: {
        requiresAuth: true
      }
  },
  {
    path: "/token-migration-success",
    name: "tokenMigrationSuccess",
    component: () =>
      import("../views/TokenMigration/TokenMigrationSuccess.vue"),
      meta: {
        requiresAuth: true
      }
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router;
