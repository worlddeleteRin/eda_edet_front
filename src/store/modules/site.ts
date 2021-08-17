// import { Store } from 'vuex';
const request_call_info_default = {
	name: '',
	phone: '',
	phone_mask: '+7',
}

export default {
  state: {
	request_call_info: { ...request_call_info_default },
  },
  mutations: {
	setRequestCallInfo(state: Record<string,any>, request_call_info: Record<string,any>) {
		console.log('mutate request call info')
		state.request_call_info = { ...request_call_info }
	},
	resetRequestCallInfo(state: Record<string,any>) {
		state.request_call_info = { ...request_call_info_default } 
	},	
  },
  actions: {
	sendRequestCallAPI(state: Record<string,any>) {
		//console.log(context)
		console.log('try to send action request call API', state.request_call_info)
		// code goes here
	},
  },
}
