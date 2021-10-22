<template>
<div class="mx-auto max-w-screen-lg 2xl:max-w-screen-xl">
	
	<div class="h-[50px] md:h-[76px] flex items-center justify-between relative flex-shrink">


	<!-- header logo -->
	<router-link :to="'/'" 
	class="flex item$-left flex-shrink w-4/12 h-full md:w-3/12 max-w-max">
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
	<!-- header location -->
	<div class="flex-row items-center hidden ml-8 lg:flex">
		<Icon
			icon="carbon:location-filled"
			class="text-gray-800"
			width="25"
		/>
		<span class="ml-1 text-lg tracking-wide">
			Ялта
		</span>
	</div>
	<!-- eof header location -->
	<!-- header contact -->
	<div class="flex-col flex-1 hidden w-3/12 md:flex md:flex-0">
		<div class="w-full text-center">
			<a 
			:href="'tel:'+ commonInfo?.delivery_phone"
			class="text-xl font-medium text-black"	
			>
				{{ commonInfo?.delivery_phone_display }}	
			</a>
		</div>
		<div class="w-full text-center">
		<Button
		@click="requestCallClick"
		class="block mx-auto mt-1 max-w-max bg-default"
		textColor="white"
		:title="'Заказать звонок'"
		:size="'medium'"
		/>
		</div>
	</div>
	<!-- eof header contact -->

	<!-- header profile links -->
	<div class="justify-end flex-1 hidden md:flex"
		v-if="userModuleEnabled"
	>
	<!-- if user authorized block -->	
	<div
	v-if="!userAuthorized"
	>
		<Button
		@click="openUserAuthorizeClicked"
		title="&#x1F525; Войти"
		rounded="full"
		size="large"
		shadow="small"
		backgroundColor="#f3f3f7"
		class="ml-2 text-[#5c6370] hover:text-gray-900"
		/>
	</div>

	<!-- eof if user authorized block -->
	<!-- if user not authorized -->
	<div
	v-else
	>
	<div v-if="userModuleEnabled">
		<Button
		title="&#x1F389; Бонусы"
		rounded="full"
		size="large"
		backgroundColor="#f3f3f7"
		shadow="small"
		class="text-[#5c6370] hover:text-gray-900"
		/>

		<!-- user profile link button -->
		<router-link :to="'/profile'">
		<Button
		title="&#x1F511; Кабинет"
		rounded="full"
		shadow="small"
		size="large"
		backgroundColor="#f3f3f7"
		class="ml-2 text-[#5c6370] hover:text-gray-900"
		/>
		</router-link>
		<!-- eof user profile link button -->

		</div>
	</div>
	<!-- eof if user not authorized block -->
	</div>
	<!-- eof header profile links -->


	</div>



	<!-- subheader -->
	<el-affix
		:z-index="5"
	>
		<div class="relative hidden md:flex h-[58px] items-center justify-between bg-white">
			<!-- desktop nav links -->				
			<div class="flex items-center">
				<router-link
				:to="nav_link.link_path"
				v-for="nav_link in commonInfo?.menu_links"
				:key="nav_link"
				class="py-4 mr-4 text-sm font-medium cursor-pointer select-none hover:text-default transition duration-200"
				>
					{{ nav_link.link_name }}
				</router-link>
			</div>
			<!-- eof desktop nav links -->
			<!-- header cart -->
			<router-link 
			:to="'/cart'"
			class="px-5 py-2 rounded-full cursor-pointer bg-default">
				<span class="text-[white] select-none">
					Корзина
				</span>
				<span>
				</span>
			</router-link>
			<!-- eof header cart -->
		</div>
	</el-affix>
	<!-- eof subheader -->


</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from '@iconify/vue';
import Button from '@/components/buttons/Button.vue';
export default defineComponent({
	name: "HeaderComponent",
	props: {
		commonInfo: {
			type: Object,
			default: null,
		},
		brandName: {
			type: String,
			default: "BrandName",
		},
		contactPhone: {
			type: String,
			default: "79780000000",
		},
		contactPhoneDisplay: {
			type: String,
			default: "7 978-000-00-00",
		},
		userAuthorized: {
			type: Boolean,
			default: false,
		},
		userModuleEnabled: {
			type: Boolean,
			default: false, 
		}
	},
	components: {
		Icon,
		Button,
	},
	emits: ["open-call-request", "open-user-authorize"],
	setup (props, {emit}) {

		var requestCallClick  = () => emit("open-call-request")
		var openUserAuthorizeClicked = () => emit("open-user-authorize")

		return {
			// functions
			requestCallClick,
			openUserAuthorizeClicked,
		}
	}
})
	
</script>
