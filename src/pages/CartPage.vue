<template>
	cart products are {{ cart_products }}
<div class="bg-gray-100">
<div class="flex flex-col py-3 mx-auto md:items-start md:flex-row md:px-4 max-w-screen-xl">
	<cart-products
	class="flex flex-col items-center justify-center w-11/12 mx-auto md:w-7/12"
	/>
	<cart-summary
	class="w-11/12 mx-auto bg-white md:ml-5 md:w-5/12"
	/>
</div>
</div>
</template>

<script>

import { computed } from 'vue';
import { useStore } from 'vuex';

// local components
import CartProducts from '@/components/cart/CartProducts.vue';
import CartSummary from '@/components/cart/CartSummary.vue';
export default {
	name: "CartPage",
	components: {
		CartProducts,
		CartSummary,
	},
	setup () {
		const store = useStore()

		const line_items = computed(() => store.state.cart.cart.line_items)

		return {
			line_items,	
		}
	}
}
</script>

