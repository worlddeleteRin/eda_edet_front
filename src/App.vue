<template>

	<!-- site main header -->
	<header-component
		@open-mobile-menu="setMobileMenu(true)"
		@open-call-request="setCallRequestModal(true)"
		@open-user-authorize="setUserAuthorizeModal(true)"
		:userAuthorized="user_authorized"
		:logoUrl="'http://192.168.1.141:8080/logo_variant.png'"
		class="px-3 mt-1 md:px-2 md:mt-4"
	/>
	<!-- eof site main header -->

	<!-- mobile main header -->
	<mobile-header-menu
		v-if="mobile_menu_open"
		@close-mobile-menu="setMobileMenu(false)"
	/>
	<!-- eof mobile main header -->

	<!-- site main router-view -->
	  <router-view />
	<!-- eof site main router-view -->

	<!-- call request popup modal -->	
	<request-call-modal
		v-if="call_request_open"
		:requestCallInfo="request_call_info"
		@close-modal="setCallRequestModal(false)" 
		@request-call="sendRequestCall"
		@request-call-info="updateRequestCallInfo"
	/>
	<!-- eof call request popup modal -->

	<!-- user authorize popup modal -->
	<user-authorize-modal
		v-if="user_authorize_open"
		@close-modal="setUserAuthorizeModal(false)"
		@user-login-info="setUserLoginInfo"
		:userLoginInfo="user_login_info"
		:userAuthorizeStates="user_authorize_states"
	/>
	<!-- eof uesr authorize popup modal -->

</template>

<script>
import { useStore } from 'vuex';
import { computed, defineAsyncComponent } from 'vue'

// local components
import HeaderComponent from '@/components/header/HeaderComponent';
const MobileHeaderMenu  = defineAsyncComponent (() => import(/* webpackChunkName: "mobile-header" */'@/components/header/MobileHeaderMenu'));
const RequestCallModal = defineAsyncComponent ( () => import(/* webpackChunkName: "request-call-modal" */'@/components/modals/RequestCallModal'));
const UserAuthorizeModal = defineAsyncComponent( () => import(/* webpackChunkName: "authorize-modal" */ '@/components/modals/UserAuthorizeModal'));
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
		// user info
		const user_authorized = computed(() => store.state.user.user_authorized)
		const user_login_info = computed( () => store.state.user.user_login_info)
		const user_authorize_states = computed(() => store.state.user.user_authorize_states)
		const user_authorize_open = computed( () => store.state.modals.user_authorize_open)


		const mobile_menu_open = computed (() => store.state.modals.mobile_menu_open)
		const theme_colors = computed(() => store.state.theme.colors)
		const call_request_open = computed(() => store.state.modals.call_request_open)

		const request_call_info = computed(() => store.state.site.request_call_info)
		// functions
		var setMobileMenu = (is_open) => store.commit("modals/setMobileMenuOpen", is_open)	
		var setCallRequestModal = (is_open) => {
			if (!is_open) {
				store.commit('resetRequestCallInfo')
			}
			store.commit("modals/setCallRequestModalOpen", is_open)
		}
		var setUserAuthorizeModal = (is_open) => store.commit('setUserAuthorizeOpen', is_open)
		var setUserLoginInfo = (new_user_login_info) => { 
			store.commit("setUserLoginInfo", new_user_login_info)
		}
		// update request call info
		var updateRequestCallInfo = (new_call_info) => {
			store.commit("setRequestCallInfo", new_call_info)
		}
		// send request call
		var sendRequestCall = async () => {
			await store.dispatch('sendRequestCallAPI')	
		}
		return {
			// computed
			theme_colors,
				// user
			user_authorize_states,
			user_authorized,
			user_authorize_open,
			user_login_info,

			mobile_menu_open,
			call_request_open,

			request_call_info,
			// functions
			setMobileMenu,
			setCallRequestModal,
			setUserAuthorizeModal,
			setUserLoginInfo,
			sendRequestCall,
			updateRequestCallInfo,
		}
	}
}
</script>
