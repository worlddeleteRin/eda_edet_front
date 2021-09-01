<template>
<div class="relative pb-1 overflow-hidden">
	<cart-product-item
		v-for="line_item in lineItems"
		:key="line_item.id"
		:lineItem="line_item"
		@add-quantity="addQuantityClick"
		@remove-quantity="removeQuantityClick"
		@remove-from-cart="removeFromCartClick"
	/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// local components
import CartProductItem from '@/components/cart/CartProductItem.vue';
export default defineComponent({
	name: "CartProducts",
	props: {
		lineItems: {
			type: Array,
			default: null,
		},
	},
	components: {
		CartProductItem,
	},
	emits: ['add-quantity', 'remove-quantity', 'remove-from-cart'],
	setup (props, {emit}) {
		// functions
		const addQuantityClick = (line_item: Record<string,any>) => emit('add-quantity', line_item)
		const removeQuantityClick = (line_item: Record<string,any>) => emit('remove-quantity', line_item)
		const removeFromCartClick = (line_item: Record<string,any>) => emit('remove-from-cart', line_item)
		return {
			addQuantityClick,
			removeQuantityClick,
			removeFromCartClick,
		}
	}
});
</script>

