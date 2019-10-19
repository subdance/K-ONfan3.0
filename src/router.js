import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Charcter from './views/Character.vue'
import TeaRoom from './views/TeaRoom.vue'


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
		},
		{
			path: '/blog',
			name: 'teamRoom',
			component: TeaRoom
		}
	]
})
