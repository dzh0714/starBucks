/*
 * @Author: dzh 
 * @Date: 2019-06-11 21:36:23 
 * @Last Modified by: dzh
 * @Last Modified time: 2019-06-16 21:30:06
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
	routes: [{
		path: '/',
		redirect: '/home'
	}, {
		path: '/home',
		name: 'home',
		meta: {
			title: '加班/休假'
		},
		component: () => import('@/views/home/index')
	}, {
		path: '/order',
		meta: {
			title: '筛选'
		},
		component: () => import('@/views/order/index')
	}, {
		path: '/login',
		meta: {
			title: '登录'
		},
		component: () => import('@/views/login/index')
	}, {
		path: '/detail/:type/:id',
		name: 'detail',
		meta: {
			title: '申请表'
		},
		props: true,
		component: () => import('@/views/detail/index')
	},{
		path:'/commit/:type',
		name:'commit',
		meta:{
			title:'提交申请表'
		},
		props:true,
			component: () => import('@/views/commit/index')
	}]
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title
	next()
})

export default router
