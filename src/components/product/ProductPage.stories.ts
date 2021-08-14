import ProductPage from '@/components/product/ProductPage.vue';
import { Icon }  from '@iconify/vue';
//import Button from '@/components/buttons/Button.vue';
import '@/main.css';
//import { action } from '@storybook/addon-actions';

export default {
	component: ProductPage,
	title: 'Components/ProductPages/ProductPage',
	argTypes: {
	},
}
const actionsData = {
//	onButtonAction: action('button-click')
}

const Template = args => ({
	components: { ProductPage },
	setup () {
		return { args, ...actionsData };
	},
	template: "<ProductPage v-bind='args' />",
})

export const Default = Template.bind({})
Default.args = {
}





