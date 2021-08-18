// import { Store } from 'vuex';
const delivery_methods_test = [
	{
		name: "delivery",
		name_display: "Доставка",
	},
	{
		name: "pickup",
		name_display: "Самовывоз"
	},
]

export default {
	namespaced: true,
  state: {
	modals: {
		choose_delivery_address_modal_open: false,
		create_delivery_address_modal_open: false,
		choose_pickup_address_modal_open: false,
	},
	delivery_methods: delivery_methods_test,
	checkout_info: {
		delivery_method: "delivery",
		delivery_address: null,
		pickup_address: {},
	},
  },
  getters: {
  },
  mutations: {	
	setCheckoutInfoDeliveryMethod(state:Record<string,any>, new_delivery_address: string) {
		state.checkout_info.delivery_method = new_delivery_address
	},
	setCheckoutInfoDeliveryAddress(state:Record<string,any>, new_delivery_address: Record<string,any>) {
		state.checkout_info.delivery_address = new_delivery_address
	},
	setCheckoutInfoPickupAddress(state:Record<string,any>, new_pickup_address: Record<string,any>) {
		state.checkout_info.pickup_address = new_pickup_address 
	},
	openChooseDeliveryAddressModal(state:Record<string,any>, is_open: boolean) {
		state.modals.choose_delivery_address_modal_open = is_open
	},
	openCreateDeliveryAddressModal(state:Record<string,any>, is_open: boolean) {
		state.modals.create_delivery_address_modal_open = is_open
	},
	openChoosePickupAddressModal(state:Record<string,any>, is_open: boolean) {
		state.modals.choose_pickup_address_modal_open = is_open
	},
  },
  actions: {
  },
}
