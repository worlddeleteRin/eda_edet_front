import { Commit } from 'vuex';
import { UserDataService } from '@/api/user';

const user_order_status_colors = {
	IN_PROGRESS: "#ff6900",
	CANCELLED: "gray",
	COMPLETED: "#00c304",
}
const user_authorize_states = {
	NEED_LOGIN: "NEED_LOGIN",
	NEED_PASSWORD: "NEED_PASSWORD",
	NEED_REGISTER: "NEED_REGISTER",
	RESTORE_ACCOUNT: "RESTORE_ACCOUNT",
	VERIFY_ACCOUNT: "VERIFY_ACCOUNT",
}
const user_login_info_default = {
	user_authorize_state: user_authorize_states.NEED_LOGIN,
	user_phone: '',
	user_phone_mask: '+7',
	user_password: '',
	user_password_repeat: '',
	restore_code: '',
	verify_code: '',
}
const user_test = {
	deliveryAddressList: [
		{
			id: "some_address_id_1",
			city: "Симферополь",
			street: "Кирова",
			houseNumber: "14",
			flatNumber: "19",
			entranceNumber: "2",
			floorNumber: "4",
			address_display: "Симферополь, ул. Кирова, д.14, кв.19, подъезд 2, этаж 4",
			comment: "Комментарий к адресу",
		},
		{
			id: "some_address_id_2",
			city: "Феодосия",
			street: "Киевская",
			houseNumber: "",
			flatNumber: "",
			entranceNumber: "",
			floorNumber: "",
			address_display: "Феодосия, ул. Киевская, д.22",
			comment: "Комментарий к адресу",
		},
	]
}
export default {
  state: {
	user: { ...user_test },
	user_access_token: null,
	user_order_status_colors: user_order_status_colors,
	user_orders: [],
	user_authorized: false,
	user_authorize_states: user_authorize_states,
	user_login_info: user_login_info_default,
  },
  getters: {
  },
  mutations: {
	setUserAuthorized(state: Record<string, any>, is_authorized: boolean) {
		state.user_authorized = is_authorized 
	},
	setUserAccessToken(state: Record<string,any>, access_token: string) {
		state.user_access_token = access_token;
	},
	resetUserLoginInfo(state: Record<string,any>) {
		state.user_login_info.user_password = ''
		state.user_login_info.user_password_repeat = ''
		state.user_login_info.restore_code = ''
		state.user_login_info.verify_code = ''
	},
	setUserLoginInfo(state: Record<string, any>, new_user_login_info: Record<string, any>) {
		state.user_login_info = { ...new_user_login_info }
	},
	setUserInfo(state: Record<string,any>, user_info: Record<string,any>) {
		state.user = user_info
	},
	setUserOrders(state: Record<string,any>, user_orders: Array<Record<string,any>>) {
		// replace Array<object> to someting like Array<UserOrder> ? 
		state.user_orders = user_orders;
	},
  },
  actions: {
	async checkUserAuth({commit}: {commit: Commit}) {
		console.log('run check user auth')
		const access_token = localStorage.getItem("user_access_token")
		console.log('token is', access_token)
//		const test_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMiIsImV4cCI6MTYyOTk3NjA3Nn0.tBJxanC48a1-PbA3GfBrStrUIVFN_mkgLrmDe0vfsz4"
//		commit('setUserAccessToken', test_token)	
//		localStorage.setItem("user_access_token", test_token)
//		localStorage.removeItem("user_access_token")
		if (!access_token) {
			return null
		}
		commit('setUserAccessToken', access_token)
		const resp_data: Record<string,any> = await UserDataService.getUserMe(access_token)
		if (resp_data.token_valid && resp_data.user_data) {
			commit('setUserAuthorized', true)
			commit('setUserInfo', resp_data.user_data)
		}
	},
	async checkUserExistAPI({state}: Record<string,any>) {
		const username = state.user_login_info.user_phone
		const resp_data: Record<string,any> = await UserDataService.checkExistVerifiedUser(username)
		console.log('resp data is', resp_data)
		if (resp_data) {
			return resp_data.data.exist_verified
		}
		return false
	},
	// load user orders from API and mutate them
	async loadUserOrdersAPI({commit}: { commit: Commit}) {
		console.log('run load user orders api')
		const user_orders: Array<Record<string,any>> = []
		// load user order from api and commit them 
		commit('setUserOrders', user_orders)
	},
	// updates user name, request API
	async updateUserNameAPI({commit}: { commit: Commit}, new_user_name: string) {
		// send new user_name to update
		// await apiUpdateUserName(new_user_name)
		// renew user info from api and mutate it
		console.log(new_user_name)
		const user_info = {}
		commit('setUserInfo', user_info)
	},
	async createDeliveryAddressAPI({commit}: { commit: Commit}, new_delivery_address: Record<string,any>) {
		console.log('commit is', commit)
		console.log('run create new delivery address api', new_delivery_address)
	},
	// validators
	validateCheckAccount({ state }: Record<string,any>) {
		const v_info = {
			is_valid: false,
			v_msg: '',
		}
		if (state.user_login_info.user_phone.length != 10) {	
				v_info.v_msg = 'Корректно введите номер телефона'	
				return v_info 
		}
		v_info.is_valid = true
		return v_info;
	},
	validateCheckPassword({ state }: Record<string,any>) {
		const v_info = {
			is_valid: false,
			v_msg: '',
		}
		if (state.user_login_info.user_password.length == 0) {	
				v_info.v_msg = 'Введите Ваш пароль'	
				return v_info 
		}
		v_info.is_valid = true
		return v_info;
	},
	validateCheckRegister({state}: Record<string,any>) {
		const password = state.user_login_info.user_password
		const password_repeat = state.user_login_info.user_password_repeat
		const v_info = {
			is_valid: false,
			v_msg: '',
		}
		if (password.length  == 0 || password_repeat.length == 0) {	
			v_info.v_msg = 'Заполните поля паролей'	
			return v_info 
		}
		if (password != password_repeat) {
			v_info.v_msg = 'Введенные пароли на совпадают'
			return v_info
		}
		if (password.length < 6 || password_repeat.length < 6) {
			v_info.v_msg = "Длина пароля должна быть не менее 6 символов"
			return v_info 
		}
		v_info.is_valid = true
		return v_info
	},
	validateCheckRestore({ state }: Record<string,any>) {
		const v_info = {
			is_valid: false,
			v_msg: '',
		}
		if (state.user_login_info.restore_code.length == 0) {	
				v_info.v_msg = 'Введите код, высланный Вам по смс'	
				return v_info 
		}
		v_info.is_valid = true
		return v_info
	},
	validateCheckVerify({ state }: Record<string,any>) {
		const v_info = {
			is_valid: false,
			v_msg: '',
		}
		if (state.user_login_info.verify_code.length == 0) {	
				v_info.v_msg = 'Введите код, высланный Вам по смс'	
				return v_info 
		}
		v_info.is_valid = true
		return v_info
	},

  },
}
