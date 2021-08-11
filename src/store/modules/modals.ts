// import { Store } from 'vuex';

export default {
  state: {
	mobile_menu_open: false,
  },
  mutations: {
	setMobileMenuOpen(state: Record<string, any>, is_visible: boolean) {
		state.mobile_menu_open = is_visible
	},
  },
  actions: {
  },
}
