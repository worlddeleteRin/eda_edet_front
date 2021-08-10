import HeaderComponent from './HeaderComponent.vue';
import { Icon }  from '@iconify/vue';
// import Button from '../buttons/Button.vue';
import '@/main.css';
//import { action } from '@storybook/addon-actions';

export default {
	component: HeaderComponent,
	title: 'Components/Header/HeaderMain',
	argTypes: {
	},
}
const actionsData = {
//	onButtonAction: action('button-click')
}

const Template = args => ({
	components: { HeaderComponent },
	setup () {
		return { args, ...actionsData };
	},
	template: "<HeaderComponent v-bind='args' />",
})

export const Primary = Template.bind({})
Primary.args = {
}




