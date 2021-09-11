<template>
<!-- html code -->
<div class="flex flex-col items-center max-w-md mx-auto shadow-xl rounded-b-xl"> 
        <!-- stock image -->
        <div
		class="overflow-hidden rounded-t-xl max-h-[200px]">  
            <img 
			class="object-cover w-full h-full transform hover:scale-110 duration-700" 
			:src="stock.imgsrc[0]"
			>
        </div>
		<!-- eof stock image -->
        <!-- title, subtitle -->
        <div class="w-full px-6 mb-4 bg-white rounded-b-xl">  
            <div
			class="block mt-4 text-lg font-semibold">
				{{ stock.title }}
            </div>
            <div class="mt-1">
				{{ stock.description }}
            </div>
        </div>
        
    </div>
<!-- eof html code -->
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: "StockCard",
	props: {
		stock: Object,
	}
});
</script>
