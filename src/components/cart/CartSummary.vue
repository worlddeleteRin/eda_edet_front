<template>
<div class="px-4 py-5 rounded">
	<!-- cart go checkout button -->
	<router-link :to="'/checkout'"
	class="flex justify-center w-full py-4 mx-auto bg-green-500 rounded cursor-pointer hover:bg-green-600 transition">
		<span class="text-sm font-bold text-white select-none">
			Перейти к оформлению	
		</span>
	</router-link>
	<!-- eof cart go checkout button -->
	<div class="py-2 text-xs font-medium text-gray-500">
		Доступные способы доставки и оплаты можно выбрать при оформлении заказа
	</div>

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
				5 350  &#x20bd;	
			</span>
		</div>
		<div class="flex items-center justify-between mt-2">
			<span class="text-sm font-base">
				Скидка
			</span>
			<span class="text-sm font-semibold text-red-500">
				- 3 350  &#x20bd;	
			</span>
		</div>
	</div>
	<div class="pt-3 mt-3 border-t border-gray-300">
		<div class="flex items-center justify-between">
			<span class="text-lg font-bold">
				Общая стоимость	
			</span>
			<span class="text-lg font-bold text-black">
				10 944  &#x20bd;	
			</span>
		</div>
	</div>

</div>

</template>

<script>
export default {
	name: "CartSummary",
	components: {
	},
	setup () {
		return {
		}
	}
}
</script>
