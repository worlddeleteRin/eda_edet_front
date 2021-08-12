<template>
<!-- 
	product card display as vertical card component,
	but at tylewindcss "md" default screen responsive breakpoint 
	wraps to horizontail view
-->
<div>

	<!-- image -->
	<div>
		<img
		:src="product.imgsrc[0]"
		class="object-contain w-36 h-36"
		/>
	</div>
	<!-- eof image -->
	<!-- details -->
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
	props: {
		product: {
			type: Object as PropType<ProductInterface>, // change to product interface Object type?
			required: true,
			default: {
				"name": "some product name",
				"price": 123123,
				"imgsrc": [
					"https://i.picsum.photos/id/527/1000/1000.jpg?hmac=58DhmNmoflyEtAQW8CtzqGN1tItgvnytquSC23qjhdQ"
				],
			} as ProductInterface,
		},
	},
	emits: [''],
	components: {
		Icon,
	},
	setup (props, { emit }) {
		return {
		}
	}
});
</script>
