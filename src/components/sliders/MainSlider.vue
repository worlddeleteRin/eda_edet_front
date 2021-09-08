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
			image_link: "https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1629794231_7675f0fecbc14cf49b4fe4988bce2d80.jpeg",
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

