<template>
<div 
class="relative flex items-center w-full py-2 mx-4 mb-2 bg-white rounded-lg"
>
	<!-- IMG BLOCK -->
	<div class="relative flex items-center w-4/12 h-full ml-3">
		<img 
		:src="img_src"
		class="object-contain w-full h-full"
		style="max-height:130px;"
		/>
	</div>
	<!-- EOF IMG BLOCK -->
	<!-- detail block -->
	<div class="flex flex-col justify-around w-8/12 ml-3 mr-2">
		<div class="text-lg font-medium">
			2 300 &#8381; 
		</div>
		<div class="text-sm font-light">
			some product name
		</div>

		<!-- cart item quantity -->
		<add-quantity-input
		class="mt-2"
		/>
		<!-- eof cart item quantity -->
	</div>
	<!-- eof detail block -->

	<cart-product-item-delete
		class="absolute bottom-2 right-2"
	/>

</div>
</template>

<script>
import CartProductItemDelete from '@/components/cart/CartProductItemDelete.vue';
import AddQuantityInput from '@/components/input/AddQuantityInput.vue';
// import { Icon } from "@iconify/vue";
export default {
	name: "CartProductItem",
	components: {
		AddQuantityInput,
		CartProductItemDelete,
	},
	setup () {
	const img_src = "https://i.picsum.photos/id/288/1000/1000.jpg?hmac=g45YxmYKZYl0LSLl-kB2Z8YcbUA9F2VJTiPRfbs3pLE"
	// functions
		return {
			img_src,	
			// functions
		}
	}
}
</script>

