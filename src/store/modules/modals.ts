// import { Store } from 'vuex';

export default {
  state: {
	mobile_menu_open: false,
	call_request_open: false,
	user_authorize_open: false,
  },
  mutations: {
	setMobileMenuOpen(state: Record<string, any>, is_visible: boolean) {
		state.mobile_menu_open = is_visible;
	},
	setCallRequestModalOpen(state: Record<string, any>, is_open: boolean) {
		state.call_request_open = is_open;
	},
	setUserAuthorizeOpen(state: Record<string, any>, is_open: boolean) {
		state.user_authorize_open = is_open; 
	},
  },
  actions: {
  },
}
