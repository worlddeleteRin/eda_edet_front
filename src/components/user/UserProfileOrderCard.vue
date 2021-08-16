<template>
<div>
	<div class="flex justify-between px-4 py-3 bg-gray-50 rounded-md">
	<!-- order id and status -->
	<div class="flex flex-col justify-between">
		<div class="font-bold">
			# 15779652
		</div>
		<div 
		class="px-3 py-1 text-sm tracking-wide text-center text-white uppercase rounded-md"
		:style="{backgroundColor: order_status_color}"
		>
			Завершен
		</div>
	</div>
	<!-- eof order is and status -->
	<!-- order delivery info -->
	<div>

	</div>
	<!-- eof order delivery info -->
	<!-- order main info -->
	<div class="flex flex-col justify-between w-6/12">
		<!-- order payment method and amount -->
		<div class="text-sm">
			<span>
				Картой курьеру 
			</span>
			<span class="font-semibold">
				1091 &#8381;
			</span>
		</div>
		<!-- eof order payment methods and amount -->
		<!-- order items images -->	
		<div class="flex mt-2 overflow-x-scroll shrink-0">
			<div
				v-for="order_item_image in 10"
				:key="order_item_image"
				class="flex-shrink-0 w-16 h-12 px-1 fle4"
			>
				<img
					:src="order.image_src"
					class="object-contain w-full h-full"
				/>
			</div>
		</div>
		<!-- eof order items images -->
	</div>
	<!-- eof order main info -->

	</div>
</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
	name: "UserProfileOrderCard",
	props: {
		order: {
			type: Object,
			required: true,
			default: function () {
				return {
					image_src: "https://cdn.farfor.ru/media/menu/products/%D0%B3%D1%83%D1%80%D0%BC%D0%B0%D0%BD.png",
					order_status: "COMPLETED", 
				};
			},
		},
		userOrderStatusColors: {
			type: Object,
			default: null,
		}
	},
	setup(props, {emit}) {
		// computed
		const order_status_color  = computed(() => props.userOrderStatusColors[props.order.order_status]);

		return {
			// computed
			order_status_color,
		}
	}
});
</script>
