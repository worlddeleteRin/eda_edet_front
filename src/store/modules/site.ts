// import { Store } from 'vuex';
const request_call_info_default = {
	name: '',
	phone: '',
	phone_mask: '+7',
}

export default {
  state: {
	request_call_info: { ...request_call_info_default },
	loading_states: {
		critical_data_loading: true,
	}
  },
  mutations: {
	setSiteLoadingState(state: Record<string,any>, 
	{loading_state_name, is_loading}: {loading_state_name: string, is_loading: boolean}) {
		state.loading_states[loading_state_name] = is_loading;
	},
	setRequestCallInfo(state: Record<string,any>, request_call_info: Record<string,any>) {
		state.request_call_info = { ...request_call_info }
	},
	resetRequestCallInfo(state: Record<string,any>) {
		state.request_call_info = { ...request_call_info_default } 
	},	
  },
  actions: {
	sendRequestCallAPI({state}: Record<string,any>) {
		console.log('try to send action request call API', state.request_call_info)
		// code goes here
	},
  },
}
