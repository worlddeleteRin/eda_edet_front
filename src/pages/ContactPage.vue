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
		<div class="mt-3">
			<div class="text-xl font-medium">
				Зоны и стоимость доставки:
			</div>		
			<div class="mt-1 text-medium">
				<div>Форос - 200 руб., от 2000 руб. бесплатно</div>
				<div>Санаторное - 200 руб., от 1800 руб. бесплатно</div>
				<div>Олива - 150 руб., от 1800 руб. бесплатно</div>
				<div>Кастрополь - бесплатно при заказе от 700 руб.</div>
				<div>Парковое - 100 руб., от 1200 руб. бесплатно</div>
				<div>Понизовка - 150 руб., от 1600 руб. бесплатно</div>
				<div>Оползневое - 150 руб., от 1600 руб. бесплатно</div>
				<div>Кацивели - 150 руб., от 1800 руб. бесплатно</div>
				<div>Голубой залив - 200 руб., от 1800 руб. бесплатно</div>
				<div>Симеиз - 250 руб., от 2000 руб. бесплатно</div>
				<div>Алупка - 250 руб., от 2200 руб. бесплатно</div>
			</div>
		</div>	
	</div>

    <!-- map -->
<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaa55d08de833328b0c25b176d4b217ecdcfa0c9c93d7d719e3c0bd3d50207cbe&amp;source=constructor" width="100%" height="400" frameborder="0" class="mt-4 rounded-md"></iframe>
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
