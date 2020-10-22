import Home from '@/views/Home';

export default [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            authRequired: true
        }
    },
    {
        path: '/menu',
        name: 'Menu',
        component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
    },
    {
        path: '/sign-in',
        name: 'Signin',
        component: () => import(/* webpackChunkName: "sign-in" */ '../views/Signin.vue')
    },
    {
        path: '/join',
        name: 'Join',
        component: () => import(/* webpackChunkName: "join" */ '../views/Join.vue')
    }
];
