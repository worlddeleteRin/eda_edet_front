<template>

<div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40"
	@click="closeModalClick"
>
</div>

<transition 
	enter-active-class="transition ease-out duration-200" 
	enter-from-class="opacity-0 translate-y-1 scale-90" 
	enter-to-class="opacity-100 translate-y-0 scale-100" 
	leave-active-class="transition ease-in duration-1000" 
	leave-from-class="translate-y-0 scale-100" 
	leave-to-class="translate-y-1 scale-0"
>
	<div 
	v-if="is_mounted"
	class="fixed w-11/12 bg-white rounded-lg top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 max-w-[600px]">
		<div class="px-12 py-8">

			<div class="text-xl font-medium text-center md:text-2xl">
				Выберите адрес доставки	
			</div>

			<!-- addresses list -->
			<div>
				<!-- address -->
				<div
					v-for="address in addressList"
					:key="address.id"
					@click="chooseDeliveryAddressClick(address)"
					class="px-4 py-3 my-3 bg-gray-100 rounded-lg"
				>
					{{ address.address_display }}
				</div>
				<!-- eof address -->
			</div>
			<!-- eof addresses list -->

		</div>
	</div>

</transition>
	

</template>

<script lang="ts">
import { onMounted, ref, reactive, defineComponent } from 'vue';
//import Button from '@/components/buttons/Button.vue';

export default defineComponent({
	name: "CheckoutChoooseDeliveryAddressModal",
	emits: ['close-modal', 'delivery-address'],
	components: {
//		Button,
	},
	props: {
		addressList: {
			type: Array,
			deafult: null,
		}
	},
	setup (props, {emit}) {
		const is_mounted = ref(false)
		// functions
		onMounted(() => {
			is_mounted.value = true
		})
		var closeModalClick = () => emit('close-modal')		
		// emit choosed address to set on click
		var chooseDeliveryAddressClick = (delivery_address: Record<string,any>) => emit("delivery-address", delivery_address)

		return {
			// reactive
			// computed
			is_mounted,
			// functions
			closeModalClick,
			chooseDeliveryAddressClick,
		}
	}
});

</script>
