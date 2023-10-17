import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/CoachesList';
import CoachDetail from './pages/CoachDetail';
import CoachRegistration from './pages/CoachRegistration';
import ContactCoach from './pages/ContactCoach';
import MyRequests from './pages/MyRequests';
import NotFound from './pages/NotFound';
import UserAuth from './pages/auth/UserAuth';

import store from './store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    { path: '/requests', component: MyRequests, meta: { requiresAuth: true } },
    { path: '/login', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
