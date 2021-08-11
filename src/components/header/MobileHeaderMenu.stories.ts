import MobileHeaderMenu from '@/components/header/MobileHeaderMenu';
import { Icon }  from '@iconify/vue';
// import Button from '../buttons/Button.vue';
import '@/main.css';
//import { action } from '@storybook/addon-actions';

export default {
	component: MobileHeaderMenu,
	title: 'Components/Headers/MobileHeaderMenu',
	argTypes: {
	},
}
const actionsData = {
//	onButtonAction: action('button-click')
}

const Template = args => ({
	components: { MobileHeaderMenu },
	setup () {
		return { args, ...actionsData };
	},
	template: "<MobileHeaderMenu v-bind='args' />",
})

export const Default = Template.bind({})
Default.args = {
}





