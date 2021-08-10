import Button from './Button.vue';
//import Icon  from '@iconify/vue';
import '../../main.css';
import { action } from '@storybook/addon-actions';

export default {
	component: Button,
	title: 'Components/Buttons/Button',
	argTypes: {
		onButtonAction: {},
		backgroundColor: { control: 'color'},
		textColor: { control: 'color'},
		type: {
		options: ['primary','success', 'info', 'danger', 'warning'],
		control: 'select',
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: 'select',
		},
		rounded: { 
			options: ['small', 'medium', 'large', 'full'],
			control: 'select'
		},
		shadow: { 
			options: ['none', 'small', 'medium', 'large'],
			control: 'select'
		},
		isLoading: { control: 'boolean'},
	},
}
const actionsData = {
	onButtonAction: action('button-click')
}

const Template = args => ({
	components: { Button },
	setup () {
		return { args, ...actionsData };
	},
	template: "<Button v-bind='args' @button-click='action'/>",
})

export const Primary = Template.bind({})
Primary.args = {
}
export const Secondary = Template.bind({})
Secondary.args = {
	title: "secondary button title",
}




