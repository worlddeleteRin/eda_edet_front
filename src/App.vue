<template>
	<header-component
		@open-mobile-menu="setMobileMenu(true)"
		@open-call-request="setCallRequestModal(true)"
		@open-user-authorize="setUserAuthorizeModal(true)"
		:userAuthorized="false"
		:logoUrl="'http://192.168.1.141:8080/logo_variant.png'"
		class="px-3 mt-1 md:px-2 md:mt-4"
	/>
	<mobile-header-menu
		v-if="mobile_menu_open"
		@close-mobile-menu="setMobileMenu(false)"
	/>

	{{ user_login_info }}

	<!-- 
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
  </div>
  -->
  <router-view />

	<request-call-modal
		v-if="call_request_open"
		@close-modal="setCallRequestModal(false)" 
		class="z-40"
	/>

	<user-authorize-modal
		v-if="user_authorize_open"
		@close-modal="setUserAuthorizeModal(false)"
		@user-login-info="setUserLoginInfo"
		:userLoginInfo="user_login_info"
	/>

</template>

<script>
import { useStore } from 'vuex';
import { computed, defineAsyncComponent } from 'vue'

// local components
import HeaderComponent from '@/components/header/HeaderComponent';
const MobileHeaderMenu  = defineAsyncComponent (() => import('@/components/header/MobileHeaderMenu'));
const RequestCallModal = defineAsyncComponent ( () => import('@/components/modals/RequestCallModal'));
const UserAuthorizeModal = defineAsyncComponent( () => import('@/components/modals/UserAuthorizeModal'));
//import MobileHeaderMenu from '@/components/header/MobileHeaderMenu';

export default {
	name: "App",
	components: {
		HeaderComponent,
		MobileHeaderMenu,
		RequestCallModal,
		UserAuthorizeModal,
	},
	setup () {
		const store = useStore()
		// computed
		const user_authorized = computed(() => store.state.user.user_authorized)
		const mobile_menu_open = computed (() => store.state.modals.mobile_menu_open)
		const theme_colors = computed(() => store.state.theme.colors)
		const call_request_open = computed(() => store.state.modals.call_request_open)
		const user_authorize_open = computed( () => store.state.modals.user_authorize_open)
		const user_login_info = computed( () => store.state.user.user_login_info)
		// functions
		var setMobileMenu = (is_open) => store.commit('setMobileMenuOpen', is_open)	
		var setCallRequestModal = (is_open) => store.commit('setCallRequestModalOpen', is_open)
		var setUserAuthorizeModal = (is_open) => store.commit('setUserAuthorizeOpen', is_open)
		var setUserLoginInfo = (new_user_login_info) => { 
			store.commit("setUserLoginInfo", new_user_login_info)
		}
		return {
			// computed
			mobile_menu_open,
			user_authorized,
			theme_colors,
			call_request_open,
			user_authorize_open,
			user_login_info,
			// functions
			setMobileMenu,
			setCallRequestModal,
			setUserAuthorizeModal,
			setUserLoginInfo,
		}
	}
}
</script>
