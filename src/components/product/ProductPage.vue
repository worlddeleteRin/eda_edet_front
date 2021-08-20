<template>
<div 
	@click="closeProductPage"
	class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40"
	:style="[backgroud_translate_style]">
</div>

	<transition 
		enter-active-class="transition ease-out duration-200" 
		enter-from-class="opacity-0 translate-y-1 scale-90" 
		enter-to-class="opacity-100 translate-y-0 scale-100" 
		leave-active-class="transition ease-in duration-1000" 
		leave-from-class="translate-y-0 scale-100" 
		leave-to-class="translate-y-1 scale-0"
	>
<!-- 
	product page is a popover modal
-->

<div 
id="product_id_1"
:class="['fixed top-0 left-0 md:inset-x-0 w-full h-full md:w-10/12 md:max-w-[800px] md:mx-auto bg-white py-7 px-9 rounded-xl md:top-1/2 md:transform md:-translate-y-1/2 flex flex-col md:flex-row overflow-x-hidden z-50']"
:style="[translate_style, translate_animation, overflow_style]"
>
	<!-- main product card div -->
	<!--
	<div class="">
	-->
	{{ translate_style }}

	<!-- image -->
	<div class="max-h-[400px] h-full relative rounded w-full md:w-7/12 flex">
		<img
			v-lazy="'https://dodopizza-a.akamaihd.net/static/Img/Products/ebb801139e7d4c4397fcc4372c7dd149_1875x1875.jpeg'"
			class="object-contain w-full rounded"
		/>
	</div>
	<!-- eof image -->

	<!-- detail block -->
	<div class="relative w-full md:w-5/12">
		<!-- product name -->
		<div class="text-2xl font-medium">
			{{ product.name }}
		</div>
		<!-- eof product name -->
		<!-- product weight -->
		<div class="text-gray-500">
			250 гр.	
		</div>
		<!-- eof product weight -->
		<!-- product description -->
		<div class="mt-1">
			{{ product.description }}
			<div
			v-for="item in 20"
			:key="item"
			>
				<div>
				some test content here	
				</div>
			</div>

		</div>
		<!-- eof product description -->
		<!-- addcart -->
		<div class="w-full bottom-2">
			<Button
				rounded="full"
				:title="'В корзину за '+ product.price + ' &#8381;'"
				class="block max-w-full px-5 py-3 text-white bg-default"
			/>
		</div>
		<!-- eof addcart -->
	</div>
	<!-- eof detail block -->

	<div
	@click="closeProductPage"
	class="fixed p-1 cursor-pointer -top-12 -right-12"
	>
		<Icon
			icon="ci:close-big"
			width="40"
			class="text-white"
		/>
	</div>

<!--
	</div>
	-->
	<!-- eof main product card div -->

</div>

</transition>


</template>

<script lang="ts">
import Hammer from 'hammerjs';
import { defineComponent, PropType, onMounted, ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import ProductInterface from '@/interfaces/ProductInterface';
//import LazyImage from '@/components/image/LazyImage.vue';
import Button from '@/components/buttons/Button.vue';
// delete below code
import { useRouter } from 'vue-router';

export default defineComponent({
	name: "ProductPage",
	components: {
		Icon,
//		LazyImage,
		Button,
	},
	props: {
		product: {
			type: Object as PropType<ProductInterface>, // change to product interface Object type?
			default: {
				"id": "someproductid",
				"name": "some product name",
				"description": "some product cool description will be here asdf sadfasdf asdfasdf asdf asdf asdfas dfasdf asdf asdf",
				"price": 123123,
				"imgsrc": [
					"https://i.picsum.photos/id/527/1000/1000.jpg?hmac=58DhmNmoflyEtAQW8CtzqGN1tItgvnytquSC23qjhdQ"
				],
			} as ProductInterface,
		},
	},
	emits: ['add-cart'],

	setup (props, { emit }) {	
		const router = useRouter()
		const can_pan_px = 0
		const need_close_px = 170
		// refs
		const is_mounted = ref(false)
		const is_closed = ref(false)
		const overflow_style = ref("overflow-y: scroll;")
		const backgroud_translate_style = ref("")
		const translate_style = ref("")
		const translate_animation = ref("")
		const currentScroll = ref(0)
		const startPanDelta = ref(0)
		const startPanpx = ref(0)
		const endPanDelta = ref(0)
		const endPanpx = ref(0)
		const productElement = ref("")
		// computed
		const canPan  = computed(() => currentScroll.value <= can_pan_px);
		const needClose = computed(() => {
			if (endPanpx.value > need_close_px) {
				return true
			}
//			const velo = (endPanDelta - startPanDelta) * (endPanpx - startPanpx)
			if ((endPanDelta.value - startPanDelta.value) < 200 && (endPanpx.value - startPanpx.value) > 140) {
				return true
			}
			return false
		});
		// functions
		const translateCard = (to_translate: number) => {
			translate_style.value = `transform: translateY(${to_translate}px);`
		}
		const setTranslateDuration = (duration: number) => {
			translate_animation.value = `transition: transform ${duration}ms ease;`
		}
		const makeOverflowYScroll = () => { 
			//console.log('make overflow scroll')
			overflow_style.value = "overflow-y: scroll;"
		}
		const makeOverflowYHidden = () => { 
			//console.log('make overflow hidden')
			overflow_style.value = "overflow-y: hidden;"
		}
		var addCartClick = () => emit('add-cart')
		var closeProductPage = () =>  { 
			if (!is_closed.value) {
				is_closed.value = true
				backgroud_translate_style.value = "opacity: 0; transition: opacity 1000ms ease;"
				setTranslateDuration(300)
				translateCard(200)
				productElement.value.ontransitionend = () => router.back();
				//is_closed.value = true
				//router.back()
			}
		}


		// onmounted hammer js for product

		onMounted (() => {

			is_mounted.value = true
			console.log('it is mounted')
			var stage = document.getElementById('product_id_1')
			productElement.value = stage
			// add onScroll event listener to stage
			stage.onscroll = (e) => currentScroll.value = stage.scrollTop
			if (stage) {
				var mc = new Hammer(stage, {
					touchAction: "pan-y",
					inputClass: Hammer.TouchInput
				})
				mc.get('pan').set({
					direction: Hammer.DIRECTION_DOWN,
					threshold: 10,
					//velocity: 0.1
				})
				mc.on('panstart', function(e) {
					startPanpx.value = e.deltaY	
					startPanDelta.value = e.deltaTime
					setTranslateDuration(0)
					if (canPan.value) {
						makeOverflowYHidden()
					}
					//console.log('event is', e)
				})
				mc.on('panmove', function(e) {
					//const currentScroll = stage.scrollTop
					if (canPan.value) {
						//console.log('move cursor', e)
						if (e.deltaY > 0) {
							translateCard(e.deltaY)
						}
					}
				});
				mc.on('panend', function(e) {
					//console.log('end moving cursor', e)
//					stage.ontransitionend = () => {
						endPanDelta.value = e.deltaTime
						endPanpx.value = e.deltaY
						setTranslateDuration(500)
						translateCard(0)
						makeOverflowYScroll()
						console.log('time start', startPanDelta.value, ', time end: ', endPanDelta.value, endPanDelta.value - startPanDelta.value)
						if (needClose.value)  {
							closeProductPage()	
						}
						//translate_animation.value= `transition: transform 1000ms ease;`
						//translate_style.value = `transform: translateY(0px);`
//					}
				});
				console.log('hammer initialized')
			} else {
				console.log('no stage', stage)
			}
		});
		// eof onmounted hammer js for product



		return {
			is_mounted,
			// functions
			addCartClick,
			closeProductPage,
			translate_style,
			translate_animation,
			overflow_style,
			backgroud_translate_style,		
		}
	}
});
</script>
