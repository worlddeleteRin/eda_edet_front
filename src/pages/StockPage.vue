<template>
<div class="px-4 mx-auto mt-2 mb-8 md:px-2 max-w-screen-lg 2xl:max-w-screen-xl">

	<div 
		class="mx-auto mt-3 mb-4 text-2xl font-semibold md:text-3xl max-w-screen-lg"
	>
		Акции		
	</div>

<div 
	v-if="stocks"
	class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
>
	<div
		v-for="stock in stocks"
		:key="stock.id"
	>
		<StockCard 
			:stock="stock"
		/>
	</div>
</div>

</div>
</template>

<script lang="ts">

import { defineComponent, onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';

import StockCard from '@/components/stock/StockCard.vue';

export default defineComponent({
	name: "StockPage",
	components: {
		StockCard,
	},
	setup () {
		const store = useStore()
		// computed
		const stocks = computed(() => store.state.site.stocks);
		// functions
		onBeforeMount(async () => {
			if(!stocks.value) {
				await store.dispatch("getStocksAPI")
			}
		});
		return {
			stocks,
		}
	}
});
</script>
