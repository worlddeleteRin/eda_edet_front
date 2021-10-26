<template>

<div class="px-4 mx-auto mb-5 max-w-screen-lg 2xl:max-w-screen-xl md:px-2">

	<div 
		class="mx-auto mt-3 mb-4 text-2xl font-semibold md:text-3xl max-w-screen-lg"
	>
		Контакты
	</div>

	<div class="px-6 py-4 bg-gray-100 rounded-lg">
		<div>

			<div class="text-xl font-medium">
				Телефон доставки:
			</div>		
			<a :href="'tel:'+ common_info.delivery_phone" class="mt-1 text-medium">
				{{ common_info.delivery_phone_display }}
			</a>
			<div class="text-xl font-medium">
				Адрес:
			</div>		
			<div class="mt-1 text-medium">
				{{ common_info.location_address }}
			</div>
		</div>
		<div class="mt-3">
			<div class="text-xl font-medium">
				Режим работы:
			</div>		
			<div class="mt-1 text-medium">
				<div>Пн-Пт: 10:00 - 22:00</div>
				<div>Cб-Вс: 10:00 - 23:00</div>
			</div>
		</div>	
	</div>

	<!-- map -->
<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/11470/yalta/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Ялта</a><a href="https://yandex.ru/maps/geo/yalta/1444531236/?ll=34.176932%2C44.497716&utm_medium=mapframe&utm_source=maps&z=13.56" style="color:#eee;font-size:12px;position:absolute;top:14px;">Ялта — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUm6MBdSC" width="100%" height="300" frameborder="1" allowfullscreen="true" style="position:relative;" class="mt-5 rounded-md"></iframe></div>
	<!-- eof map -->

</div>

</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
	name: "ContactPage",
	setup () {
		const store = useStore()
		const common_info = computed(() => store.state.site.common_info);
		return {
			common_info,
		}
	}
});
</script>
