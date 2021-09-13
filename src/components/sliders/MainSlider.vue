<template>
  <splide
	class="px-5 mx-auto mt-4 md:mt-2 max-w-screen-lg 2xl:max-w-screen-xl rounded-md"
	:options="options"
  >

    <splide-slide
	class="flex justify-center text-center rounded-md"
	v-for="i in 4"
	:key="i"
	>
		<img 
		class="object-cover w-full max-h-80 min-h-[110px] rounded-md"
		:src="image_link"/>
	</splide-slide>

  </splide>

</template>
<script>
	import { Splide, SplideSlide } from '@splidejs/vue-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';

	
export default {
	name: "MainSlider",
	components: {
		Splide,
		SplideSlide,
	},
	data () {
		return {
			image_link: "http://vuetest.fast-code.ru/static/images/slider_image.jpeg",
			options: {
				type: 'loop',
				// rewind: true,
				perPage: 1,
				arrows: false,
			},
		}
	},
	methods: {
	},
}
</script>

