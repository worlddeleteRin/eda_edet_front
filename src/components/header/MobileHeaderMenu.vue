<template>
<div class="fixed top-0 left-0 z-40 w-full h-full overflow-y-scroll bg-white">
	<div class="">
		
		<!-- mobile menu first -->
		<div :class="['flex justify-between h-[50px] relative', border_bottom_class]">
			<!-- logo -->
			<div class="flex items-center h-full max-w-[186px] pl-8">
				<img 
				:src="commonInfo?.main_logo_link" 
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
			@click="routeTo('/')"
			class="px-4 py-3 hover:bg-green-200 rounded-md select-none"
			>
				<span class="text-xl font-medium">
					Главная	
				</span>
			</div>
			<div
			@click="routeTo('/#delivery-categories')"
			class="px-4 py-3 hover:bg-green-200 rounded-md select-none"
			>
				<span class="text-xl font-medium">
					Меню доставки	
				</span>
			</div>
			<div
			@click="routeTo('/profile')"
			v-if="userAuthorized && userModuleEnabled"
			class="px-4 py-3 hover:bg-green-200 rounded-md select-none"
			>
				<span class="text-xl font-medium">
					Профиль	
				</span>
			</div>
			<div
			@click="openUserAuthorizeClick"
			v-if="!userAuthorized && userModuleEnabled"
			class="px-4 py-3 hover:bg-[#262626] rounded-md select-none"
			>
				<span class="text-xl font-medium">
					Войти	
				</span>
			</div>
			<div
			@click="routeTo('/stocks')"
			class="px-4 py-3 hover:bg-green-200 rounded-md select-none"
			>
				<span class="text-xl font-medium">
					Акции	
				</span>
			</div>
			<div
			@click="routeTo('/contacts')"
			class="px-4 py-3 hover:bg-green-200 rounded-md select-none"
			>
				<span class="text-xl font-medium">
					Контакты	
				</span>
			</div>


		</div>
		<!-- eof mobile menu links -->

		<!-- mobile menu contacts -->
		<div :class="['py-1 pl-4 pr-2', border_bottom_class]">
			<a 
			:href="'tel:'+ commonInfo?.delivery_phone"
			class="flex items-center px-2 py-3 hover:bg-green-200 rounded-md">
				<Icon
				icon="bi:phone"
				width="35"
				/>
				<div class="flex flex-col ml-2 select-none">
					<span class="text-lg font-semibold">
						{{ commonInfo?.delivery_phone_display }} 
					</span>
					<span class="text-sm text-gray-400">
						Всегда на связи!
					</span>
				</div>
			</a>
			<!--
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
			-->
			<div class="flex items-center px-2 py-3 hover:bg-green-200 rounded-md select-none">
				<Icon
				icon="akar-icons:instagram-fill"
				width="35"
				/>
				<a 
                href="https://www.instagram.com/eda_edet_kastropol/"
                class="flex flex-col ml-2">
					<span class="text-lg font-semibold">
						Инстаграм	
					</span>
					<span class="text-sm text-gray-400">
						Мы в Инстаграм 
					</span>
				</a>
			</div>
            <!--
			<div class="flex items-center px-2 py-3 hover:bg-green-200 rounded-md select-none">
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
            -->
		</div>
		<!-- eof mobile menu contacts -->

		<!-- -->
		<!-- -->

	</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

export default defineComponent({
	name: "MobileHeaderMenu",
	props: {
		userModuleEnabled: {
			type: Boolean,
			default: false,
		},
		userAuthorized: {
			type: Boolean,
			default: false,
		},
		commonInfo: {
			type: Object,
			default: null
		},
	},
	emits: ['close-mobile-menu', 'open-user-authorize'],
	components: {
		Icon,
	},
	setup (props, { emit }) {
		const router = useRouter()
		const border_bottom_class = "border-b-[1px] border-green-800"
		// functions
		const routeTo = (route_path: string) => {
			router.push(route_path)
			closeMobileMenu()
		}
		var closeMobileMenu = () => emit('close-mobile-menu')	
		const openUserAuthorizeClick = () => {
			closeMobileMenu()
			emit('open-user-authorize')
		}
		return {
			border_bottom_class,
			// functions
			openUserAuthorizeClick,
			closeMobileMenu,
			routeTo,
		}
	}
});
</script>
