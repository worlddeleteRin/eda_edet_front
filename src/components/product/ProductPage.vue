<template>

	<transition 
		enter-active-class="transition ease-out duration-200" 
		enter-from-class="opacity-0 translate-y-1 scale-90" 
		enter-to-class="opacity-100 translate-y-0 scale-100" 
		leave-active-class="transition ease-in duration-1000" 
		leave-from-class="translate-y-0 scale-100" 
		leave-to-class="translate-y-1 scale-0"
	>
<!-- 
	product page is a popover modal
-->

<div 
v-if="is_mounted"
class="fixed inset-x-0 z-30 w-10/12 max-w-[800px] mx-auto bg-white py-7 px-9 rounded-xl
top-1/2 transform -translate-y-1/2 flex">

	<!-- image -->
	<div class="max-h-[400px] h-full relative rounded w-7/12 flex">
		<img
			v-lazy="'https://dodopizza-a.akamaihd.net/static/Img/Products/ebb801139e7d4c4397fcc4372c7dd149_1875x1875.jpeg'"
			class="object-contain w-full rounded"
		/>
	</div>
	<!-- eof image -->

	<!-- detail block -->
	<div class="relative w-5/12">
		<!-- product name -->
		<div class="text-2xl font-medium">
			{{ product.name }}
		</div>
		<!-- eof product name -->
		<!-- product weight -->
		<div class="text-gray-500">
			250 гр.	
		</div>
		<!-- eof product weight -->
		<!-- product description -->
		<div class="mt-1">
			{{ product.description }}
		</div>
		<!-- eof product description -->
		<!-- addcart -->
		<div class="absolute w-full bottom-2">
			<Button
				rounded="full"
				:title="'В корзину за '+ product.price + ' &#8381;'"
				class="block max-w-full px-5 py-3 text-white bg-default"
			/>
		</div>
		<!-- eof addcart -->
	</div>
	<!-- eof detail block -->

	<div
	@click="closeProductPage"
	class="absolute p-1 cursor-pointer -top-12 -right-12"
	>
		<Icon
			icon="ci:close-big"
			width="40"
			class="text-white"
		/>
	</div>

</div>

</transition>

<div 
	@click="closeProductPage"
	class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
</div>

</template>

<script lang="ts">

import { defineComponent, PropType, onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import ProductInterface from '@/interfaces/ProductInterface';
//import LazyImage from '@/components/image/LazyImage.vue';
import Button from '@/components/buttons/Button.vue';
// delete below code
import { useRouter } from 'vue-router';

export default defineComponent({
	name: "ProductPage",
	components: {
		Icon,
//		LazyImage,
		Button,
	},
	props: {
		product: {
			type: Object as PropType<ProductInterface>, // change to product interface Object type?
			required: true,
			default: {
				"id": "someproductid",
				"name": "some product name",
				"description": "some product cool description will be here asdf sadfasdf asdfasdf asdf asdf asdfas dfasdf asdf asdf",
				"price": 123123,
				"imgsrc": [
					"https://i.picsum.photos/id/527/1000/1000.jpg?hmac=58DhmNmoflyEtAQW8CtzqGN1tItgvnytquSC23qjhdQ"
				],
			} as ProductInterface,
		},
	},
	emits: ['add-cart'],

	setup (props, { emit }) {	
		const is_mounted = ref(false)
		const router = useRouter()
		var addCartClick = () => emit('add-cart')
		var closeProductPage = () => router.back()
		onMounted(() => {
			is_mounted.value = true
		})
		return {
			is_mounted,
			// functions
			addCartClick,
			closeProductPage,
		}
	}
});
</script>
