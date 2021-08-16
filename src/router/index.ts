import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "@/pages/MainPage.vue";

const productPage = () => import(/* webpackChunkName: "product-page" */ '@/components/product/ProductPage.vue')
const userProfilePage = () => import(/* webpackChunkName: "user-profile" */ '@/pages/UserProfilePage.vue')

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
  {
	path: "/profile",
	name: "UserProfilePage",
	component: userProfilePage,
	children: [
	]
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
