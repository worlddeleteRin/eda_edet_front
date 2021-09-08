<template>
<!-- 
	product card display as vertical card component,
	but at tylewindcss "md" default screen responsive breakpoint 
	wraps to horizontail view
-->
<div class="relative z-0 flex flex-1 md:flex-col md:items-center md:max-w-[400px]">

	<!-- image -->
	<div 
	@click="goToProductPage"
	class="w-6/12 md:max-w-[250px] h-full max-h-[230px] relative rounded md:w-full">
		<img
			v-lazy="'https://dodopizza-a.akamaihd.net/static/Img/Products/5dffe4c7d3bc49668f50c1d08d920992_292x292.jpeg'"
			class="object-contain w-full h-full rounded"
		/>
	</div>
	<!-- eof image -->
	<!-- details -->
	<div class="flex flex-col justify-center w-10/12 ml-2 md:w-full">

		<!-- name -->
		<div
		@click="goToProductPage"
		>
			<span>
				{{ product.name }}
			</span>
		</div>
		<!-- eof name -->
		<!-- description -->
		<div
		v-if="product.description"
		class="mt-1"
		>
			<span class="text-sm text-gray-500">
				{{ product.description }}
			</span>
		</div>
		<!-- eof description -->
		<!-- addcart -->
			<!-- mobile add cart -->
			<div class="mt-3 md:hidden">
				<Button
					@button-click="addCartClick"
					v-if="!isInCart"
					:title="product.price + ' &#8381;'"
					rounded="full"
					class="px-4 py-2 font-medium text-defaultText bg-default bg-opacity-10"
				/>

				<add-quantity-input
					v-if="isInCart"
					@add="addQuantityClick"
					@remove="removeQuantityClick"
					:quantity="cartItem ? cartItem.quantity : null"
				/>

			</div>	
			<!-- eof mobile add cart -->
			<!-- desktop add cart -->
			<div class="items-center justify-between hidden mt-4 md:flex">
				<div>
					 {{ product.price }} &#8381;
				</div>
				<Button
				@button-click="addCartClick"
				v-if="!isInCart"
				title="В корзину"
				rounded="full"
				size="large"
				class="font-medium bg-default bg-opacity-10 text-defaultText"
				/>

				<add-quantity-input 
					v-if="isInCart"
					@add="addQuantityClick"
					@remove="removeQuantityClick"
					:quantity="cartItem ? cartItem.quantity : null"
				/>

			</div>
			<!-- eof desktop add cart -->
		<!-- eof addcart -->

	</div>
	<!-- eof details -->
	<Icon
	/>

</div>
</template>

<script lang="ts">

import { defineComponent, PropType, computed } from 'vue';
import { Icon } from '@iconify/vue';
import ProductInterface from '@/interfaces/ProductInterface';
import Button from '@/components/buttons/Button.vue';
//import LazyImage from '@/components/image/LazyImage.vue';
import AddQuantityInput from '@/components/input/AddQuantityInput.vue';

// delete below code
import { useRouter } from 'vue-router';

export default defineComponent({
	name: "ProductCard",
	components: {
		Icon,
		Button,
		AddQuantityInput,
//		LazyImage,
	},
	props: {
		product: {
			type: Object as PropType<ProductInterface>, // change to product interface Object type?
			default: null,
		},
		/*
		isInCart: {
			type: Boolean,
			default: false, 
		},
		*/
		cartItem: {
			type: Object,
			default: null,
		},
	},
	emits: ['add-to-cart', 'remove-from-cart', 'add-item-quantity', 'remove-item-quantity'],

	setup (props, { emit }) {	
		const router = useRouter()

		// computed
		const isInCart = computed(() => props.cartItem == null ? false : true);
		// functions
		var goToProductPage  = () => router.push('/product/123123')
		var removeFromCartClick = () => emit('remove-from-cart', props.cartItem)
		var addCartClick = () => emit('add-to-cart', props.product)
		var addQuantityClick = () => emit('add-item-quantity', props.cartItem)
		var removeQuantityClick = () => emit('remove-item-quantity', props.cartItem)
		return {
			// computed
			isInCart,
			// functions
			addCartClick,
			removeFromCartClick,
			addQuantityClick,
			removeQuantityClick,
			goToProductPage,
		}
	}
});
</script>
