<template>
	<div class="flex h-[50px] relative justify-between mx-auto w-full max-w-screen-lg items-center px-3 pt-1">
		<!-- open mobile menu button -->
		<div 
		@click="openMobileMenuClick"
		class="px-2 py-1"
		>
			<Icon
				icon="feather:menu"
				width="22"
				class="block"
			/>
		</div>
		<!-- eof open mobile menu button -->

		
		<!-- header logo -->
		<router-link :to="'/'" 
		class="flex items-left flex-shrink w-4/12 h-full md:w-3/12 max-w-max">
			<img 
			:src="commonInfo?.main_logo_link"
			class="object-contain max-h-full h-11/12"
			/>
		</router-link>
			<!-- 
			<div class="ml-4 text-2xl">
				{{ brandName }}
			</div>
			-->
		<!-- eof header logo -->

		<!-- mobile cart -->
		<router-link
		:to="'/cart'"
		class="flex px-2 py-1"
		>
			<Icon
			icon="akar-icons:shopping-bag"
			width="22"
			class="block"
			/>
		</router-link>
		<!-- eof mobile cart -->

	</div>

</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
	name: "MobileHeader",
	props: {
		commonInfo: {
			type: Object,
			default: null
		}
	},
	emits: ["open-mobile-menu"],
	setup (props, {emit}) {
		const openMobileMenuClick = () => emit("open-mobile-menu")

		return {
			openMobileMenuClick,
		}
	}
});
</script>
