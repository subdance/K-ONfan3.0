import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Charcter from './views/Character.vue'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/character',
			name: 'character',
			component: Charcter
		}
	]
})
