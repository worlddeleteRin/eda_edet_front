<template>
<div class="bg-[#f3f3f7]">
<!-- main checkout page container -->
<div class="px-4 py-4 mx-auto max-w-screen-lg">
	<div class="text-2xl font-medium">
		Оформление заказа
	</div>
	<!--
	<div>
		{{ checkout_info }}
	</div>
	-->
	<!-- 
	<div>
		{{ user_info }}
	</div>
	-->
	<!-- select delivery method -->
	<div class="mt-4 text-lg font-medium">
		Способ доставки
	</div>
	<div class="mt-2 max-w-[500px]">
		<input-select-main
			:selectValues="delivery_methods"
			:activeValue="checkout_info.delivery_method"
			@select-value="updateDeliveryMethod"
		/>
	</div>
	<!-- eof select delivery method -->
	<!-- select address and time -->
	<div 
	class="py-1 pl-4 mt-6 bg-white rounded-lg max-w-[600px]"
	>
		<!-- select delivery address -->
			<select-checkout-main
				v-if="checkout_info.delivery_method == 'delivery'"
				@click="openCheckoutChooseDeliveryAddress(true)"
				:dataNew="checkout_info.delivery_address == undefined"
				:showIconSelected="true"
				:titleNew="'Выберите адрес доставки'"
				:title="getCheckoutDeliveryAddressDisplay"
			/>
		<!-- eof select delivery address -->
		<!-- select pickup address -->
			<select-checkout-main
				v-if="checkout_info.delivery_method == 'pickup'"
				@click="openCheckoutChoosePickupAddress"
				:dataNew="checkout_info.pickup_address == undefined"
				:showIconSelected="true"
				:titleNew="'Выберите пункт выдачи'"
				:title="getCheckoutPickupAddressDisplay"
			/>
		<!-- eof select pickup address -->
	</div>
	<!-- eof select address and time -->

	<!-- choose payment methods -->
	<div class="mt-4 text-lg font-medium">
		Способ оплаты
	</div>
	<div class="pl-4 py-1 mt-3 bg-white max-w-[600px] rounded-lg">
		<!-- select payment method -->
			<select-checkout-main
				@click="openCheckoutChoosePaymentMethod"
				:dataNew="checkout_info.payment_method == undefined"
				:showIconSelected="true"
				:titleNew="'Выберите способ оплаты'"
				:title="getCheckoutPaymentMethodDisplay"
			/>
		<!-- eof select payment method -->
	</div>
	<!-- eof choose payment method -->

</div>
	<!-- eof main checkout page container -->
</div>


<!-- modals -->
	<!-- choose delivery address modal -->
	<checkout-choose-delivery-address-modal
		v-if="checkout_modals.choose_delivery_address_modal_open"
		:addressList="user_info.deliveryAddressList"
		:activeAddress="checkout_info.delivery_address"
		@delivery-address="updateDeliveryAddress"
		@close-modal="openCheckoutChooseDeliveryAddress(false)"
		@open-create-delivery="openCreateDeliveryAddressModal(true)"
	/>
	<create-delivery-address-modal
		v-if="checkout_modals.create_delivery_address_modal_open"
		@close-modal="openCreateDeliveryAddressModal(false)"
		@create-delivery-address="createDeliveryAddress"
	/>
	<!-- eof choose delivery address modal -->
	<!-- choose pickup address modal -->
	<checkout-choose-pickup-address-modal
		v-if="checkout_modals.choose_pickup_address_modal_open"
		:addressList="pickup_address_list"
		:activeAddress="checkout_info.pickup_address"
		@close-modal="openCheckoutChoosePickupAddress(false)"
		@pickup-address="updatePickupAddress"	
	/>
	<!-- eof choose pickup address modal -->
	<!-- choose payment method modal -->
	<checkout-choose-payment-method-modal
		v-if="checkout_modals.choose_payment_method_modal_open"
		:paymentMethods="payment_methods"
		:activePayment="checkout_info.payment_method"
		@close-modal="openCheckoutChoosePaymentMethod(false)"
		@payment-method="updatePaymentMethod"
	/>
	<!-- eof choose payment methods modal -->
<!-- modals -->
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

import { createToast } from 'mosha-vue-toastify';
// local components
import InputSelectMain from '@/components/input/InputSelectMain.vue';
import SelectCheckoutMain from '@/components/input/SelectCheckoutMain.vue';

import CheckoutChooseDeliveryAddressModal from '@/components/checkout/CheckoutChooseDeliveryAddressModal.vue';
import CheckoutChoosePickupAddressModal from '@/components/checkout/CheckoutChoosePickupAddressModal.vue';
import CreateDeliveryAddressModal from '@/components/checkout/CreateDeliveryAddressModal.vue';
import CheckoutChoosePaymentMethodModal from '@/components/checkout/CheckoutChoosePaymentMethodModal.vue';

// validators 
import { validateCreateDeliveryAddress } from '@/validators/checkout';

export default defineComponent({
	name: "CheckoutPage",
	components: {
		InputSelectMain,
		SelectCheckoutMain,
		CheckoutChooseDeliveryAddressModal,
		CheckoutChoosePickupAddressModal,
		CheckoutChoosePaymentMethodModal,
		CreateDeliveryAddressModal,
	},
	setup () {
	// toast 
	const inputErrorToast = (title: string) => {
		createToast(
			title, {
				'type': 'danger',
				'showIcon': true,
				'hideProgressBar': true,	
			}
		);
	};
	const inputSuccessToast = (title: string) => {
		createToast(
			title, {
				'type': 'success',
				'showIcon': true,
				'hideProgressBar': true,
			}
		);
	};
	var errorToast = (title: string) => inputErrorToast(title)
	var successToast =  (title: string) => inputSuccessToast(title)
	const store = useStore()
	// computed
	// get current user info
	const user_info = computed(() => store.state.user.user)
	// available delivery methods
	const delivery_methods = computed(() => store.state.checkout.delivery_methods)
	// available pick up addresses
	const pickup_address_list = computed(() => store.state.checkout.pickup_address_list)
	// available payment methods
	const payment_methods = computed(() => store.state.checkout.payment_methods)
	// common checkout_info, that user choosed
	const checkout_info = computed(() => store.state.checkout.checkout_info)
	// checkout modals open state
	const checkout_modals = computed(() => store.state.checkout.modals)
	// functions
	const updateDeliveryMethod = (new_delivery_method:string) => store.commit('checkout/setCheckoutInfoDeliveryMethod', new_delivery_method)


	const openCheckoutChooseDeliveryAddress = (is_open:boolean) => {
		// open checkout choose delivery address modal
		store.commit('checkout/openChooseDeliveryAddressModal', is_open)
	}
	const openCreateDeliveryAddressModal = (is_open:boolean) => {
		// open checkout choose delivery address modal
		store.commit('checkout/openCreateDeliveryAddressModal', is_open)
		openCheckoutChooseDeliveryAddress(false)
	}
	const openCheckoutChoosePickupAddress = (is_open: boolean) => {
		store.commit('checkout/openChoosePickupAddressModal', is_open)
	}
	// opens choose payment method modal
	const openCheckoutChoosePaymentMethod = (is_open: boolean) => {
		store.commit('checkout/openChoosePaymentMethodModal', is_open)
	}
	// set checkout delivery address to checkout_info
	const updateDeliveryAddress = (address: Record<string,any>) => { 
		store.commit("checkout/setCheckoutInfoDeliveryAddress", address)
		// close the modal
		openCheckoutChooseDeliveryAddress(false)
	}
	// set checkout pickup address to checkout_info
	const updatePickupAddress = (address: Record<string,any>) => { 
		store.commit("checkout/setCheckoutInfoPickupAddress", address)
		// close the modal
		openCheckoutChoosePickupAddress(false)
	}
	// set new payment_method to checkout_info
	const updatePaymentMethod = (payment_method: Record<string,any>) => { 
		store.commit("checkout/setCheckoutInfoPaymentMethod", payment_method)
		// close the modal
		openCheckoutChoosePaymentMethod(false)
	}
	// make API call and create delivery address
	const createDeliveryAddress = async (new_delivery_address: Record<string,any>) => {
		// need to validate form
		const validate_info = validateCreateDeliveryAddress(new_delivery_address)
		if (!validate_info.is_valid) {
			errorToast(validate_info.v_msg)
		} else {
			successToast('commit createDeliveryAddressAPI')
			await store.dispatch('createDeliveryAddressAPI', new_delivery_address)
			openCreateDeliveryAddressModal(false)
		}
		// close form, call action, is form is valid and pass address
		// show error toast, if it is any error, dont close the form
	}

	// helper to get checkout delivery address display
	var getCheckoutDeliveryAddressDisplay = computed(() => {
		if (checkout_info.value.delivery_address != null) {
			return checkout_info.value.delivery_address.address_display
		} else {
			return ''
		}
	});
	// helper to get checkout pickup address display
	var getCheckoutPickupAddressDisplay = computed(() => {
		if (checkout_info.value.pickup_address != null) {
			return checkout_info.value.pickup_address.name
		} else {
			return ''
		}
	});
	// helper to get checkout pickup address display
	var getCheckoutPaymentMethodDisplay = computed(() => {
		if (checkout_info.value.payment_method != null) {
			return checkout_info.value.payment_method.name
		} else {
			return ''
		}
	});
		return {
			// computed
			user_info,
			delivery_methods,
			checkout_info,
			checkout_modals,

			pickup_address_list,
			payment_methods,
			// functions
			updateDeliveryMethod,
			updateDeliveryAddress,
			updatePickupAddress,
			updatePaymentMethod,

			createDeliveryAddress,

			openCheckoutChooseDeliveryAddress,
			openCreateDeliveryAddressModal,
			openCheckoutChoosePickupAddress,
			openCheckoutChoosePaymentMethod,

			getCheckoutDeliveryAddressDisplay,
			getCheckoutPickupAddressDisplay,
			getCheckoutPaymentMethodDisplay,
		}
	}
});
</script>

