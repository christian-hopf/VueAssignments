import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter';
import UsersFooter from './pages/UsersFooter';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/teams' },
      {
        name: 'teams',
        path: '/teams',
        meta: { requireAuth: true },
        components: { default: TeamsList, footer: TeamsFooter },
        children: [
          {
            name: 'team-members',
            path: ':teamId',
            component: TeamMembers,
            props: true,
          },
        ],
      },
      {
        path: '/users',
        components: { default: UsersList, footer: UsersFooter },
        beforeEnter(to, from, next) {
          console.log('users beforeEnter');
          console.log(to, from);
          next();
        },
      },
      { path: '/:notFound(.*)', component: NotFound },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
      // console.log(to, from, savedPosition);
      if (savedPosition) {
        return savedPosition;
      }
      return { left: 0, top: 0 };
    },
  });
  
  router.beforeEach(function (to, from, next) {
    console.log('beforeEach');
    if (to.meta.requireAuth) {
      console.log('Authentication required');
      next();
    } else {
      next();
    }
    // console.log(to, from);
    // if (to.name === 'team-members') {
    //   next();
    // } else {
    //   next({ name: 'team-members', params: { teamId: 't1' } });
    // }
  });
  
  router.afterEach(function (to, from) {
    // can be used for sending analytics data
    console.log('afterEach');
    console.log(to, from);
  });

  export default router;