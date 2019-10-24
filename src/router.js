import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Charcter from './views/Character.vue'
import TeaRoom from './views/TeaRoom.vue'
import Video from './views/Video.vue'
import Album from './views/Album.vue'


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
			name: 'blog',
			component: TeaRoom
		},
		{
			path: '/album',
			name: 'album',
			component: Album
		},
		{
			path: '/video',
			name: 'video',
			component: Video
		}
	]
})
