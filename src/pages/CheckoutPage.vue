<template>
<div class="">
<div class="px-4 py-4 mx-auto bg-[#f3f3f7] max-w-screen-lg">
	<div class="text-2xl font-medium">
		Оформление заказа
	</div>
	<div>
		{{ checkout_info }}
	</div>
	<div>
		{{ user_info }}
	</div>
	<!-- select delivery method -->
	<div>
		<input-select-main
			:selectValues="delivery_methods"
			:activeValue="checkout_info.delivery_method"
			@select-value="updateDeliveryMethod"
		/>
	</div>
	<!-- eof select delivery method -->
	<!-- select address and time -->
	<div 
	class="py-1 pl-4 mt-4 bg-white rounded-lg"
	>
		<!-- select delivery address -->
			<select-checkout-main
				v-if="checkout_info.delivery_method == 'delivery'"
				@click="openCheckoutChooseDeliveryAddress(true)"
				:dataNew="true"
				:showIconSelected="true"
				:titleNew="'Выберите адрес доставки'"
				:title="'some title is here'"
				:subtitle="'some subtitle is here'"
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
		@delivery-address="updateDeliveryAddress"
		@close-modal="openCheckoutChooseDeliveryAddress(false)"
	/>
	<!-- eof choose delivery address modal -->
<!-- modals -->
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
// local components
import InputSelectMain from '@/components/input/InputSelectMain.vue';
import SelectCheckoutMain from '@/components/input/SelectCheckoutMain.vue';

import CheckoutChooseDeliveryAddressModal from '@/components/checkout/CheckoutChooseDeliveryAddressModal.vue';

export default defineComponent({
	name: "CheckoutPage",
	components: {
		InputSelectMain,
		SelectCheckoutMain,
		CheckoutChooseDeliveryAddressModal,
	},
	setup () {
	const store = useStore()
	// computed
	// get current user info
	const user_info = computed(() => store.state.user.user)
	// available delivery methods
	const delivery_methods = computed(() => store.state.checkout.delivery_methods)
	// common checkout_info, that user choosed
	const checkout_info = computed(() => store.state.checkout.checkout_info)
	// checkout modals open state
	const checkout_modals = computed(() => store.state.checkout.modals)
	// functions
	const updateDeliveryMethod = (new_delivery_method) => store.commit('checkout/setCheckoutInfoDeliveryMethod', new_delivery_method)
	const openCheckoutChooseDeliveryAddress = (is_open) => {
		// open checkout choose delivery address modal
		store.commit('checkout/openChooseDeliveryAddressModal', is_open)
	}
	const openCheckoutChoosePickupAddress = () => {
		window.alert('asdlf')	
	}
	// set checkout delivery address to checkout_info
	updateDeliveryAddress = (address) => store.commit("checkout/setCheckoutInfoDeliveryAddress", address)
		return {
			// computed
			user_info,
			delivery_methods,
			checkout_info,
			checkout_modals,
			// functions
			updateDeliveryMethod,
			updateDeliveryAddress,
			openCheckoutChooseDeliveryAddress,
			openCheckoutChoosePickupAddress,
		}
	}
});
</script>

