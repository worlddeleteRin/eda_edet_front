import RequestCallModal from '@/components/modals/RequestCallModal.vue';
import { Icon }  from '@iconify/vue';
// import Button from '../buttons/Button.vue';
import '@/main.css';
//import { action } from '@storybook/addon-actions';

export default {
	component: RequestCallModal,
	title: 'Components/Modals/RequestCallModal',
	argTypes: {
	},
}
const actionsData = {
//	onButtonAction: action('button-click')
}

const Template = args => ({
	components: { RequestCallModal },
	setup () {
		return { args, ...actionsData };
	},
	template: "<RequestCallModal v-bind='args' />",
})

export const Default = Template.bind({})
Default.args = {
}





