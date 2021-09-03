// import { Store } from 'vuex';

export default {
	namespaced: true,
  state: {
	mobile_menu_open: false,
	call_request_open: false,
	user_authorize_open: false,
	user_change_password_open: false,
	after_authorized_route_to: "/profile",
  },
  mutations: {
	setMobileMenuOpen(state: Record<string, any>, is_visible: boolean) {
		state.mobile_menu_open = is_visible;
	},
	setCallRequestModalOpen(state: Record<string, any>, is_open: boolean) {
		state.call_request_open = is_open;
	},
	setUserAuthorizeOpen(state: Record<string, any>, 
	{is_open, after_authorized_route_to}: {is_open: boolean, after_authorized_route_to: string}
	) {
		console.log('mutation called', after_authorized_route_to)
		state.user_authorize_open = is_open; 
		if (after_authorized_route_to) {
			state.after_authorized_route_to = after_authorized_route_to	
		}
	},
	setUserChangePasswordOpen(state: Record<string,any>, is_open: boolean) {
		state.user_change_password_open = is_open
	},
  },
  actions: {
  },
}
