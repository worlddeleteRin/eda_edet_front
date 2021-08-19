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
const pickup_address_list_test = [
	{
		id: "some_id",
		name: "Симферополь, ул. Володарского, 12",
		info: "some additional info is here",
	},
	{
		id: "some_id2",
		name: "Феодосия, ул. Кирова, 28",
		info: "some additional info is here",
	},
]
const payment_methods_test = [
	{
		id: "payment_method_id",
		name: "Картой курьеру",
	},
	{
		id: "payment_method_id2",
		name: "Наличными",
	},
]

export default {
	namespaced: true,
  state: {
	modals: {
		choose_delivery_address_modal_open: false,
		create_delivery_address_modal_open: false,
		choose_pickup_address_modal_open: false,
		choose_payment_method_modal_open: false,
	},
	delivery_methods: delivery_methods_test,
	payment_methods: payment_methods_test,
	pickup_address_list: pickup_address_list_test,
	checkout_info: {
		delivery_method: "delivery",
		payment_method: null,
		delivery_address: null,
		pickup_address: null,
	},
  },
  getters: {
  },
  mutations: {	
	setCheckoutModalOpen(state: Record<string,any>, {modal_name, is_open }: Record<string,any>) {
		console.log(modal_name, is_open)
		state.modals[modal_name] = is_open
	},
	setCheckoutInfoDeliveryMethod(state:Record<string,any>, new_delivery_address: string) {
		state.checkout_info.delivery_method = new_delivery_address
	},
	setCheckoutInfoDeliveryAddress(state:Record<string,any>, new_delivery_address: Record<string,any>) {
		state.checkout_info.delivery_address = new_delivery_address
	},
	setCheckoutInfoPickupAddress(state:Record<string,any>, new_pickup_address: Record<string,any>) {
		state.checkout_info.pickup_address = new_pickup_address 
	},
	setCheckoutInfoPaymentMethod(state:Record<string,any>, new_payment_method: Record<string,any>) {
		state.checkout_info.payment_method = new_payment_method 
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
	openChoosePaymentMethodModal(state:Record<string,any>, is_open: boolean) {
		state.modals.choose_payment_method_modal_open = is_open
	},
  },
  actions: {
  },
}
