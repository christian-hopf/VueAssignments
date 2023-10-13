import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/CoachesList';
import CoachDetail from './pages/CoachDetail';
import CoachRegistration from './pages/CoachRegistration';
import ContactCoach from './pages/ContactCoach';
import MyRequests from './pages/MyRequests';
import NotFound from './pages/NotFound';
import UserAuth from './pages/auth/UserAuth';

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
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: MyRequests },
    { path: '/login', component: UserAuth},
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
