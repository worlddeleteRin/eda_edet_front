<template>
<!-- 
	product card display as vertical card component,
	but at tylewindcss "md" default screen responsive breakpoint 
	wraps to horizontail view
-->
<div class="flex">

	<!-- image -->
	<div class="max-w-[250px] w-5/12 h-full relative rounded">
		<img
		:src="product.imgsrc[0]"
		class="object-contain w-full h-full rounded"
		/>
	</div>
	<!-- eof image -->
	<!-- details -->
	<div class="w-7/12 ml-2">

		<!-- name -->
		<div>
			<span>
				{{ product.name }}
			</span>
		</div>
		<!-- eof name -->
		<!-- description -->
		<div
		v-if="product.description"
		class="mt-2"
		>
			<span class="text-sm text-gray-500">
				{{ product.description }}
			</span>
		</div>
		<!-- eof description -->
		<!-- addcart -->
		<div class="px-5 py-1 mt-3 rounded-full cursor-pointer select-none bg-default max-w-max">
			<span class="font-medium">
				от {{ product.price }} &#8381;
			</span>
		</div>
		<!-- eof addcart -->

	</div>
	<!-- eof details -->
	<Icon
	/>

</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Icon } from '@iconify/vue';
import ProductInterface from '@/interfaces/ProductInterface';

export default defineComponent({
	name: "ProductCard",
	components: {
		Icon,
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
		var addCartClick = () => emit('add-cart')
		return {
			// functions
			addCartClick,
		}
	}
});
</script>
