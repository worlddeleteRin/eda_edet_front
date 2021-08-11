<template>
<div class="fixed top-0 left-0 w-full h-full text-white bg-black">
	<div class="">
		
		<!-- mobile menu first -->
		<div class="flex justify-between h-[50px] relative border-b-[1px] border-gray-800">
			<!-- logo -->
			<div class="flex items-center h-full ml-3 max-w-[186px]">
				<img 
				:src="logoUrl" 
				alt="logo is here"
				class="object-contain w-full h-full"
				>
			</div>
			<!-- eof logo -->
			<!-- exit menu -->
			<div 
			@click="closeMobileMenu"
			class="flex items-center px-2 py-1">
				<Icon 
				icon="carbon:close"
				width="35"
				/>
			</div>
			<!-- eof exit menu -->
		</div>
		<!-- eof mobile menu first -->

		<!-- mobile menu links -->
		<div>
			<div
			v-for="menu_link in menuLinks"
			>
				<span>
					{{ menu_link.link_name }}
				</span>
			</div>
		</div>
		<!-- eof mobile menu links -->

		<!-- mobile menu contacts -->
		<div>
		</div>
		<!-- eof mobile menu contacts -->

		<!-- -->
		<!-- -->

		<!-- -->
		<!-- -->

		<!-- -->
		<!-- -->

	</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
	name: "MobileHeaderMenu",
	props: {
		logoUrl: {
			type: String,
			required: true,
			default: 'https://placeholder.com/wp-content/uploads/2018/10/placeholder-1.png',
		},
		menuLinks: {
			type: Array as Array<Record<string,string>>,
			required: true,
			default: [
				{
					"link_name": "Профиль",
					"link_path": "/"
				},
				{
					"link_name": "Мои бонусы",
					"link_path": "/"
				},
			]
		},
	},
	emits: ['close-mobile-header-menu'],
	components: {
		Icon,
	},
	setup (props, { emit }) {
		const default_mobile_nav = [
				{
					"link_name": "Профиль",
					"link_path": "/"
				},
				{
					"link_name": "Мои бонусы",
					"link_path": "/"
				},
			]
		var closeMobileMenu = () => emit('close-mobile-header-menu')	
		return {
			default_mobile_nav,
			closeMobileMenu,
		}
	}
});
</script>
