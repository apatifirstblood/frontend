import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

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
      import("../views/StartMigration.vue")
  },
  {
    path: "/account-verification",
    name: "accountVerification",
    component: () =>
      import("../views/AccountVerification.vue")
  },
  {
    path: "/account-verification-complete",
    name: "accountVerificationComplete",
    component: () =>
      import("../views/AccountVerificationComplete.vue")
  },
  {
    path: "/get-ready-for-migration-1",
    name: "readyForMigration1",
    component: () =>
      import("../views/TokenMigration/ReadyForMigration1.vue")
  },
  {
    path: "/get-ready-for-migration-2",
    name: "readyForMigration2",
    component: () =>
      import("../views/TokenMigration/ReadyForMigration2.vue")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
