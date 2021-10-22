<template>
  <splide
	class="px-5 mx-auto mt-4 md:mt-2 max-w-screen-lg 2xl:max-w-screen-xl rounded-md"
	:options="options"
  >

    <splide-slide
	class="flex justify-center text-center rounded-md"
	v-for="slider_item in sliders"
	:key="slider_item?.id"
	>
		<img 
		class="object-contain w-full max-h-80 md:min-h-[110px] rounded-md"
		:src="slider_item?.imgsrc[0]"/>
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
	props: {
		sliders: {
			type: Array,
			default: null,
		}
	},
	data () {
		return {
			options: {
				type: 'loop',
				autoHeight: true,
				heightRatio: 0.3,
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

