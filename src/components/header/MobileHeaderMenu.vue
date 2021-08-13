<template>
<div class="fixed top-0 left-0 z-40 w-full h-full overflow-y-scroll text-white bg-black">
	<div class="">
		
		<!-- mobile menu first -->
		<div :class="['flex justify-between h-[50px] relative', border_bottom_class]">
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
		<div :class="['py-1 pl-10 pr-3', border_bottom_class]">
			<div
			v-for="menu_link in menuLinks"
			:key="menu_link"
			class="px-4 py-3 hover:bg-[#262626] rounded-md select-none"
			>
				<span class="text-xl font-medium">
					{{ menu_link.link_name }}
				</span>
			</div>
		</div>
		<!-- eof mobile menu links -->

		<!-- mobile menu contacts -->
		<div :class="['py-1 pl-4 pr-2', border_bottom_class]">
			<div class="flex items-center px-2 py-3 hover:bg-[#262626] rounded-md">
				<Icon
				icon="bi:phone"
				width="35"
				/>
				<div class="flex flex-col ml-2 select-none">
					<span class="text-lg font-semibold">
						{{ contactPhoneDisplay }} 
					</span>
					<span class="text-sm text-gray-400">
						Всегда на связи!
					</span>
				</div>
			</div>
			<div class="flex items-center px-2 py-3 hover:bg-[#262626] rounded-md select-none">
				<Icon
				icon="ci:apple"
				width="35"
				/>
				<div class="flex flex-col ml-2">
					<span class="text-lg font-semibold">
						App Store
					</span>
					<span class="text-sm text-gray-400">
						Мобильное приложение
					</span>
				</div>
			</div>
			<div class="flex items-center px-2 py-3 hover:bg-[#262626] rounded-md select-none">
				<Icon
				icon="ci:play-store"
				width="35"
				/>
				<div class="flex flex-col ml-2">
					<span class="text-lg font-semibold">
						Play Store 
					</span>
					<span class="text-sm text-gray-400">
						Мобильное приложение
					</span>
				</div>
			</div>
			<div class="flex items-center px-2 py-3 hover:bg-[#262626] rounded-md select-none">
				<Icon
				icon="akar-icons:instagram-fill"
				width="35"
				/>
				<div class="flex flex-col ml-2">
					<span class="text-lg font-semibold">
						Инстаграм	
					</span>
					<span class="text-sm text-gray-400">
						Мы в Инстаграм 
					</span>
				</div>
			</div>
			<div class="flex items-center px-2 py-3 hover:bg-[#262626] rounded-md select-none">
				<Icon
				icon="bx:bxl-vk"
				width="35"
				/>
				<div class="flex flex-col ml-2">
					<span class="text-lg font-semibold">
						Вконтакте	
					</span>
					<span class="text-sm text-gray-400">
						Мы в Вконтакте
					</span>
				</div>
			</div>
		</div>
		<!-- eof mobile menu contacts -->

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
		contactPhone: {
			type: String,
			required: true,
			default: "79780000000",
		},
		contactPhoneDisplay: {
			type: String,
			required: true,
			default: "7 (978)-000-00-00",
		},
		menuLinks: {
			type: Array,
			required: true,
			default: () => [
				{
					"link_name": "🔥 Акции",
					"link_path": "/"
				},
				{
					"link_name": "Контакты",
					"link_path": "/"
				},
				{
					"link_name": "О Нас",
					"link_path": "/"
				},
			]
		},
	},
	emits: ['close-mobile-menu'],
	components: {
		Icon,
	},
	setup (props, { emit }) {
		console.log('call setup function of the mobile menu component')
		const border_bottom_class = "border-b-[1px] border-gray-800"
		const default_mobile_nav = [
				{
					"link_name": "Акции",
					"link_path": "/"
				},
				{
					"link_name": "Контакты",
					"link_path": "/"
				},
				{
					"link_name": "О Нас",
					"link_path": "/"
				},
			]
		var closeMobileMenu = () => emit('close-mobile-menu')	
		return {
			default_mobile_nav,
			closeMobileMenu,
			border_bottom_class,
		}
	}
});
</script>
