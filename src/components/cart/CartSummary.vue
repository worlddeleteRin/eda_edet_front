<template>
<div class="px-4 py-5 rounded">
	<!-- cart go checkout button -->
	<div
		@click="goCheckoutClick"	
		class="flex justify-center w-full py-4 mx-auto bg-green-500 rounded cursor-pointer hover:bg-green-600 transition">
		<span class="text-sm font-bold text-white select-none">
			Перейти к оформлению	
		</span>
	</div>
	<!-- eof cart go checkout button -->
	<div class="py-2 text-xs font-medium text-gray-500">
		Доступные способы доставки и оплаты можно выбрать при оформлении заказа
	</div>

	<!-- apply promo block -->
	<input-promo-main
	/>
	<!-- eof apply promo block -->

	<div class="py-3 my-3 border-t border-gray-300">
		<div class="flex items-center justify-between">
			<span class="text-lg font-bold">
			Ваша корзина
			</span>
			<span class="text-sm text-gray-600">
			1 товар
			</span>
		</div>
		<div class="flex items-center justify-between mt-2">
			<span class="text-sm font-base">
				Сумма заказа	
			</span>
			<span class="text-sm font-semibold text-black">
				{{ cart.base_amount }} &#x20bd;	
			</span>
		</div>
		<div class="flex items-center justify-between mt-2">
			<span class="text-sm font-base">
				Скидка
			</span>
			<span class="text-sm font-semibold text-red-500">
				{{ cart.discount_amount }}  &#x20bd;	
			</span>
		</div>
	</div>
	<div class="pt-3 mt-3 border-t border-gray-300">
		<div class="flex items-center justify-between">
			<span class="text-lg font-bold">
				Общая стоимость
			</span>
			<span class="text-lg font-bold text-black">
				{{ cart.total_amount }}  &#x20bd;	
			</span>
		</div>
	</div>

</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

// local components 
import InputPromoMain  from '@/components/input/InputPromoMain.vue';

export default defineComponent({
	name: "CartSummary",
	props: {
		cart: {
			type: Object,
			default: null,
		}
	},
	components: {
		InputPromoMain,
	},
	setup (props, {emit}) {
		// functions
		const goCheckoutClick = () => emit('go-checkout')

		return {
			goCheckoutClick,
		}
	}
});
</script>
