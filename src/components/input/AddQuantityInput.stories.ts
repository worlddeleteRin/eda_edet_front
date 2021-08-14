import AddQuantityInput from '@/components/input/AddQuantityInput.vue';
import { Icon }  from '@iconify/vue';
//import Button from '@/components/buttons/Button.vue';
import '@/main.css';
//import { action } from '@storybook/addon-actions';

export default {
	component: AddQuantityInput,
	title: 'Components/Inputs/AddQuantityInput',
	argTypes: {
	},
}
const actionsData = {
//	onButtonAction: action('button-click')
}

const Template = args => ({
	components: { AddQuantityInput },
	setup () {
		return { args, ...actionsData };
	},
	template: "<AddQuantityInput v-bind='args' />",
})

export const Default = Template.bind({})
Default.args = {
}





