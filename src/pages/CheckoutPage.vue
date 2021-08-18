<template>
<div class="">
<div class="px-4 py-4 mx-auto bg-[#f3f3f7] max-w-screen-lg">
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
	<div class="mt-4">
		<input-select-main
			:selectValues="delivery_methods"
			:activeValue="checkout_info.delivery_method"
			@select-value="updateDeliveryMethod"
		/>
	</div>
	<!-- eof select delivery method -->
	<!-- select address and time -->
	<div 
	class="py-1 pl-4 mt-6 bg-white rounded-lg"
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
				:dataNew="true"
				:showIconSelected="true"
				:titleNew="'Выберите пункт выдачи'"
				:title="'some title is here'"
				:subtitle="'some subtitle is here'"
			/>
		<!-- eof select pickup address -->
	</div>
	<!-- eof select address and time -->
</div>
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
	<checkout-choose-pickup-address-modal
		v-if="checkout_modals.choose_pickup_address_modal_open"
		@close-modal="openCheckoutChoosePickupAddress(false)"
		@pickup-address="updatePickupAddress"	
	/>
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

// validators 
import { validateCreateDeliveryAddress } from '@/validators/checkout';

export default defineComponent({
	name: "CheckoutPage",
	components: {
		InputSelectMain,
		SelectCheckoutMain,
		CheckoutChooseDeliveryAddressModal,
		CheckoutChoosePickupAddressModal,
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
		return {
			// computed
			user_info,
			delivery_methods,
			checkout_info,
			checkout_modals,

			pickup_address_list,
			// functions
			updateDeliveryMethod,
			updateDeliveryAddress,
			updatePickupAddress,

			createDeliveryAddress,

			openCheckoutChooseDeliveryAddress,
			openCreateDeliveryAddressModal,
			openCheckoutChoosePickupAddress,

			getCheckoutDeliveryAddressDisplay,

		}
	}
});
</script>

