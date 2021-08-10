<template>
	<header-component
	/>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent';

export default {
	name: "App",
	components: {
		HeaderComponent,
	},
}
</script>
