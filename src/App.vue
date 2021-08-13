<template>
	<header-component
		@open-mobile-menu="setMobileMenu(true)"
		:userAuthorized="true"
		class="px-3 mt-1 md:px-2 md:mt-4"
	/>
	<mobile-header-menu
		v-if="mobile_menu_open"
		@close-mobile-menu="setMobileMenu(false)"
	/>

	<!-- 
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
  </div>
  -->
  <router-view />
</template>

<script>
import { useStore } from 'vuex';
import { computed, defineAsyncComponent } from 'vue'

// local components
import HeaderComponent from '@/components/header/HeaderComponent';
const MobileHeaderMenu  = defineAsyncComponent (() => import('@/components/header/MobileHeaderMenu'));
//import MobileHeaderMenu from '@/components/header/MobileHeaderMenu';

export default {
	name: "App",
	components: {
		HeaderComponent,
		MobileHeaderMenu,
	},
	setup () {
		const store = useStore()
		// computed
		const user_authorized = computed(() => store.state.user.user_authorized)
		const mobile_menu_open = computed (() => store.state.modals.mobile_menu_open)
		const theme_colors = computed(() => store.state.theme.colors)
		// functions
		var setMobileMenu = (is_open) => store.commit('setMobileMenuOpen', is_open)	
		return {
			// computed
			mobile_menu_open,
			user_authorized,
			theme_colors,
			// functions
			setMobileMenu,
		}
	}
}
</script>
