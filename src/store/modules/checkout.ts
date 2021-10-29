// import { Store } from 'vuex';
import { ActionContext } from 'vuex';

export default {
	namespaced: true,
  state: {
	modals: {
		choose_delivery_address_modal_open: false,
		create_delivery_address_modal_open: false,
		choose_pickup_address_modal_open: false,
		choose_payment_method_modal_open: false,
	},
	delivery_methods: null,
	payment_methods: null,
	pickup_addresses: null,
	checkout_info: {
		delivery_method: "delivery",
		payment_method: null,
        guest_name: null,
		guest_delivery_address: null,
        guest_phone: null,
		guest_phone_display: null,
		delivery_address: null,
		pickup_address: null,
	},
  },
  getters: {
  },
  mutations: {	
    updateCheckoutInfo(state: Record<string,any>, new_checkout_info: Record<string,any>) {
        state.checkout_info = {...new_checkout_info}
    },
	setCheckoutDeliveryMethods(state: Record<string,any>, delivery_methods: Array<Record<string,any>>) {
		state.delivery_methods = delivery_methods
	},
	setCheckoutPaymentMethods(state: Record<string,any>, payment_methods: Array<Record<string,any>>) {
		state.payment_methods =  payment_methods
	},
	setCheckoutPickupAddresses(state: Record<string,any>, pickup_addresses: Array<Record<string,any>>) {
		state.pickup_addresses = pickup_addresses
	},
	setCheckoutModalOpen(state: Record<string,any>, {modal_name, is_open }: Record<string,any>) {
		console.log(modal_name, is_open)
		state.modals[modal_name] = is_open
	},
	setCheckoutInfoDeliveryMethod(state:Record<string,any>, delivery_method: string) {
		state.checkout_info.delivery_method = delivery_method
	},
	setCheckoutInfoDeliveryAddress(state:Record<string,any>, new_delivery_address: Record<string,any>) {
		if (Object.keys(new_delivery_address).length === 0) {
			state.checkout_info.delivery_address = null
		} else {
			state.checkout_info.delivery_address = new_delivery_address
		}
	},
	setCheckoutInfoGuestDeliveryAddress(state:Record<string,any>, delivery_address: string) {
		state.checkout_info.guest_delivery_address = delivery_address
	},
	setCheckoutInfoPickupAddress(state:Record<string,any>, new_pickup_address: Record<string,any>) {
		state.checkout_info.pickup_address = new_pickup_address 
	},
	setCheckoutInfoPaymentMethod(state:Record<string,any>, new_payment_method: Record<string,any>) {
		state.checkout_info.payment_method = new_payment_method 
	},
  },
  actions: {
    validateCheckout(
        context: ActionContext<any,any>
    ) {
        const checkout_info = context.state.checkout_info
        if (!checkout_info.guest_phone || checkout_info.guest_phone.length != 11) {
            return { can_make_order: false, msg: 'Корректно введите номер телефона' }
        }
        if (!checkout_info.guest_name || checkout_info.guest_name.trim().length == 0) {
            return { can_make_order: false, msg: 'Введите ваше имя' }
        }
        if (!checkout_info.guest_delivery_address || checkout_info.guest_delivery_address.trim().length == 0) {
            return { can_make_order: false, msg: 'Укажите адрес доставки' }
        }
        return { can_make_order: true, msg: 'norm' }
    }
  },
}
