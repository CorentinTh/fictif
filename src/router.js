import About from './routes/About.route';
import Character from './routes/Character.route';
import VueRouter from 'vue-router';
import SearchPage from './routes/SearchPage.vue';

const routes = [
  {
    path: '/',
    component: SearchPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/character/:name',
    component: Character
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export {
  router,
  VueRouter
};
