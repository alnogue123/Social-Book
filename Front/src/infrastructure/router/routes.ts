import type { RouteRecordRaw } from "vue-router";


const routes : RouteRecordRaw[] = [
    {path: '/', redirect: '/SocialBook/welcome'},
    {path: '/SocialBook/:page', component: () => import('../../presentation/Views/WelcomeView.vue') },
    {path:'/SocialBook/home', component: () => import('../../presentation/Views/HomeView.vue')},
    {path:'/SocialBook/home/:page', component: () => import('../../presentation/Views/HomeView.vue')}
];

export default routes;