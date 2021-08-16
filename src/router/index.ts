import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "@/pages/MainPage.vue";

const productPage = () => import(/* webpackChunkName: "product-page" */ '@/components/product/ProductPage.vue')
const userProfilePage = () => import(/* webpackChunkName: "user-profile" */ '@/pages/UserProfilePage.vue')
const userProfilePagePersonalData = () => import(/* webpackChunkName: "group-user-profile" */ '@/components/user/UserProfilePagePersonalData.vue')
const userProfilePageOrders = () => import(/* webpackChunkName: "group-user-profile" */ '@/components/user/UserProfilePageOrders.vue')

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
		{
			path: "",
			name: "UserProfilePagePersonalData",
			component: userProfilePagePersonalData,
		},
		{
			path: "orders",
			name: "UserProfilePageOrders",
			component: userProfilePageOrders,
		},
	]
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
