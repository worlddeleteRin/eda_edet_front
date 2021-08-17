<template>
<div class="relative pb-1 overflow-hidden">
	<cart-product-item
	v-for="i in 5"
	:key="i"
	/>
</div>
</template>

<script>
import CartProductItem from '@/components/cart/CartProductItem.vue';
export default {
	name: "CartProducts",
	components: {
		CartProductItem,
	},
	setup () {
		return {
		}
	}
}
</script>

