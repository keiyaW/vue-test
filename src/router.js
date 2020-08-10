import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Articles from './views/Articles.vue';
import Article from './views/Article.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/articles/:id',
      name: 'article',
      component: Article,
    },
  ],
});
