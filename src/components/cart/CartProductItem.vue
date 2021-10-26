<template> <div 
class="relative flex items-center w-full py-2 mx-4 mb-2 bg-white rounded-lg"
>
	<!-- IMG BLOCK -->
	<div class="relative flex items-center w-4/12 h-full ml-3">
		<img 
		:src="lineItem.product.imgsrc[0]"
		class="object-contain w-full h-full"
		style="max-height:130px;"
		/>
	</div>
	<!-- EOF IMG BLOCK -->
	<!-- detail block -->
	<div class="flex flex-col justify-around w-8/12 ml-3 mr-2">
		<div class="flex">
			<div class="text-lg font-medium"
			:style="lineItem.product.sale_price > 0 ? 'text-decoration: line-through': ''">
				{{ lineItem.product.price * lineItem.quantity }} &#8381; 
			</div>
			<div v-if="lineItem.product.sale_price && lineItem.product.sale_price > 0"
			class="text-lg font-medium ml-2 bg-red-500 rounded-md px-1 text-white">
				{{ lineItem.product.sale_price * lineItem.quantity }} &#8381; 
			</div>
		</div>
		<div class="text-sm font-light">
			{{ lineItem.product.name }}
		</div>

		<!-- cart item quantity -->
		<add-quantity-input
			:quantity="lineItem.quantity"
			@add="addQuantityClick"
			@remove="removeQuantityClick"
			class="mt-2"
		/>
		<!-- eof cart item quantity -->
	</div>
	<!-- eof detail block -->

	<cart-product-item-delete
		@click="removeFromCartClick"
		class="absolute bottom-2 right-2"
	/>

</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// local components
import CartProductItemDelete from '@/components/cart/CartProductItemDelete.vue';
import AddQuantityInput from '@/components/input/AddQuantityInput.vue';
// import { Icon } from "@iconify/vue";
export default defineComponent({
	name: "CartProductItem",
	props: {
		lineItem: Object,
		default: null,
	},
	components: {
		AddQuantityInput,
		CartProductItemDelete,
	},
	emits: ['add-quantity', 'remove-quantity', 'remove-from-cart'],
	setup (props, {emit}) {
		// functions
		const addQuantityClick = (line_item: Record<string,any>) => emit('add-quantity', props.lineItem)
		const removeQuantityClick = (line_item: Record<string,any>) => emit('remove-quantity', props.lineItem)
		const removeFromCartClick = (line_item: Record<string,any>) => emit('remove-from-cart', props.lineItem)
	// functions
		return {
			// functions
			addQuantityClick,
			removeQuantityClick,
			removeFromCartClick,
		}
	}
});
</script>

