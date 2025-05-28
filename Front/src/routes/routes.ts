export const routes = [
    {
      path: '/',
      redirect: '/SocialBook/welcome',
    },
    {
      path: '/SocialBook/:page',
      name: 'welcome',
      component: () => import('./../presentation/Views/WelcomeView.vue')
    },
    {
      path: '/SocialBook/home/:page',
      name: 'home',
      component: () => import('./../presentation/Views/HomeView.vue')
    },
  ];
  