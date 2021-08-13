<template>
<!-- 
	product page is a popover modal
-->

<div class="fixed inset-x-0 z-30 w-10/12 max-w-[800px] mx-auto bg-white py-2 px-3 rounded-xl
top-1/2 transform -translate-y-1/2">
	product page is here

	<!-- image -->
	<div class="max-w-[250px] h-[150px] w-5/12 h-full relative rounded md:w-full">
		<lazy-image
			lazySrc="https://dodopizza-a.akamaihd.net/static/Img/Products/5dffe4c7d3bc49668f50c1d08d920992_292x292.jpeg"
			class_styles="object-contain w-full h-full rounded"
		/>
	</div>
	<!-- eof image -->

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

<div 
	@click="closeProductPage"
	class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
</div>

</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';
import { Icon } from '@iconify/vue';
import ProductInterface from '@/interfaces/ProductInterface';
import LazyImage from '@/components/image/LazyImage.vue';
// delete below code
import { useRouter } from 'vue-router';

export default defineComponent({
	name: "ProductPage",
	components: {
		Icon,
		LazyImage,
	},
	props: {
		product: {
			type: Object as PropType<ProductInterface>, // change to product interface Object type?
			required: true,
			default: {
				"id": "someproductid",
				"name": "some product name",
				"description": "some product cool description will be here",
				"price": 123123,
				"imgsrc": [
					"https://i.picsum.photos/id/527/1000/1000.jpg?hmac=58DhmNmoflyEtAQW8CtzqGN1tItgvnytquSC23qjhdQ"
				],
			} as ProductInterface,
		},
	},
	emits: ['add-cart'],

	setup (props, { emit }) {	
		const router = useRouter()
		var addCartClick = () => emit('add-cart')
		var closeProductPage = () => router.back()
		return {
			// functions
			addCartClick,
			closeProductPage,
		}
	}
});
</script>
