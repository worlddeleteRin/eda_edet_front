// import { Store } from 'vuex';

export default {
  state: {
	request_call_info: {
		name: '',
		phone: '',
		phone_mask: '',
	},
  },
  mutations: {
	setRequestCallInfo(state: Record<string,any>, request_call_info: Record<string,any>) {
		console.log('mutate request call info')
		state.request_call_info = { ...request_call_info }
	}
  },
  actions: {
	sendRequestCallAPI(state: Record<string,any>) {
		//console.log(context)
		console.log('try to send action request call API', state.request_call_info)
		// code goes here
	},
  },
}