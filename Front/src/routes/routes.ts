export const routes = [
    {
      path: '/',
      redirect: '/SocialBook/welcome',
    },
    {
      path: '/SocialBook/:page',
      name: 'welcome',
      component: () => import('./../projects/presentation/Views/WelcomeView.vue')
    },
    {
      path: '/SocialBook/home/:page',
      name: 'home',
      component: () => import('./../projects/presentation/Views/HomeView.vue')
    },
  ];
  