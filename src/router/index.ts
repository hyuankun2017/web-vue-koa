import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const a1 = require('./import_development');
const a2 = require('./import_production');
const getComponent = process.env.NODE_ENV === 'producttion'?a2:a1;

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: getComponent('login')
	}
	// {
	// 	path: '/about',
	// 	name: 'about',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	// }
];

const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	routes
});

export default router;
