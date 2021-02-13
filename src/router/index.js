import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/components/ProductList"),
    },
    {
      name: "products",
      path: "/products",
      component: () => import("@/components/ProductList")
    },
    {
      name: "product",
      path: "/product/:slug",
      component: () => import("@/components/ProductDetail")
    }
  ]
});