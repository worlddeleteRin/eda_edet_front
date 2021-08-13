import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "@/pages/MainPage.vue";

const productPage = () => import(/* webpackChunkName: "product-page" */ '@/components/product/ProductPage.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
	children: [
		{
			path: "/product/:id",
			name: "ProductPage",
			component: productPage,
		},
	] as Array<RouteRecordRaw>
  },

  /*
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/About.vue"),
  }, 
  */
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
