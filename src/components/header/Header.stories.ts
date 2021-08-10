import HeaderComponent from '@/components/header/HeaderComponent.vue';
import { Icon }  from '@iconify/vue';
// import Button from '../buttons/Button.vue';
import '@/main.css';
//import { action } from '@storybook/addon-actions';

export default {
	component: HeaderComponent,
	title: 'Components/Headers/HeaderMain',
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

export const userAuthorized = Template.bind({})
userAuthorized.args = {
	userAuthorized: true,
}
export const userNotAuthorized = Template.bind({})
userNotAuthorized.args = {
	userAuthorized: false,
}




