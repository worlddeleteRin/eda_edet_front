<template>
	<img
		v-show="!image_loaded"
		:class="'absolute bg-black ' + class_styles"
	/>
	<img
		ref="root"
		:data-src="lazySrc"
		:class="'lozad '+class_styles"
	/>

</template>

<script>
import { onMounted, ref } from 'vue'; 
import lozad from 'lozad';

export default {
	name: "LazyImage",
	props: {
		lazySrc: {
			type: String,
			default: null,
		},
		class_styles: {
			type: String,
			default: null,
		},
	},
	setup (props, {emit}) {
		const root = ref(null)
	
		var image_loaded = ref(false)

		onMounted(()=> {
			console.log('image mounted!')
			var observer = lozad('.lozad', {
			loaded: function (el) {
					el.addEventListener('load', function () {
						image_loaded.value = true
					});
				}
			})
			observer.observe()
		})
		return {
			image_loaded,
		}
	}
}

</script>
