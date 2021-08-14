import UserAuthorizeModal from '@/components/modals/UserAuthorizeModal.vue';
import { Icon }  from '@iconify/vue';
// import Button from '../buttons/Button.vue';
import '@/main.css';
//import { action } from '@storybook/addon-actions';

export default {
	component: UserAuthorizeModal,
	title: 'Components/Modals/UserAuthorizeModal,
	argTypes: {
	},
}
const actionsData = {
//	onButtonAction: action('button-click')
}

const Template = args => ({
	components: { UserAuthorizeModal },
	setup () {
		return { args, ...actionsData };
	},
	template: "<UserAuthorizeModal v-bind='args' />",
})

export const Default = Template.bind({})
Default.args = {
}





