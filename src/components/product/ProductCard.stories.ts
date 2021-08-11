import ProductCard from '@/components/product/ProductCard.vue';
import { Icon }  from '@iconify/vue';
// import Button from '../buttons/Button.vue';
import '@/main.css';
//import { action } from '@storybook/addon-actions';

export default {
	component: ProductCard,
	title: 'Components/ProductCards/ProductCard',
	argTypes: {
	},
}
const actionsData = {
//	onButtonAction: action('button-click')
}

const Template = args => ({
	components: { ProductCard },
	setup () {
		return { args, ...actionsData };
	},
	template: "<ProductCard v-bind='args' />",
})

export const Default = Template.bind({})
Default.args = {
}





