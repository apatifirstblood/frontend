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
    path: "/ready-for-migration-1",
    name: "readyForMigration1",
    component: () =>
      import("../views/ReadyForMigration/ReadyForMigration1.vue")
  },
  {
    path: "/ready-for-migration-2",
    name: "readyForMigration2",
    component: () =>
      import("../views/ReadyForMigration/ReadyForMigration2.vue")
  },
  {
    path: "/ready-for-migration-3",
    name: "readyForMigration3",
    component: () =>
      import("../views/ReadyForMigration/ReadyForMigration3.vue")
  },
  {
    path: "/token-migration-1",
    name: "tokenMirgration1",
    component: () =>
      import("../views/TokenMigration/TokenMigration1.vue")
  },
  {
    path: "/token-migration-2",
    name: "tokenMigration2",
    component: () =>
      import("../views/TokenMigration/TokenMigration2.vue")
  },
  {
    path: "/token-migration-3",
    name: "tokenMigration3",
    component: () =>
      import("../views/TokenMigration/TokenMigration3.vue")
  },
  {
    path: "/token-migration-success",
    name: "tokenMigrationSuccess",
    component: () =>
      import("../views/TokenMigration/TokenMigrationSuccess.vue")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
