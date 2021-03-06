import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Charcter from './views/Character.vue'
import Video from './views/Video.vue'
import Album from './views/Album.vue'
import Mito from './views/Mito.vue'


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
			path: '/album',
			name: 'album',
			component: Album
		},
		{
			path: '/video',
			name: 'video',
			component: Video
		},
		{
			path: '/mito',
			name: 'mito',
			component: Mito
		}
	]
})
