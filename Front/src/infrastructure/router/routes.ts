import type { RouteRecordRaw } from "vue-router";
import WelcomeView from "../../presentation/Views/WelcomeView.vue";
import HomeView from "../../presentation/Views/HomeView.vue";


const routes : RouteRecordRaw[] = [
    {path: '/', redirect: '/SocialBook/welcome'},
    {path: '/SocialBook/:page', component: WelcomeView},
    {path:'/SocialBook/home', component: HomeView},
    {path:'/SocialBook/home/:page', component: HomeView}
];

export default routes;