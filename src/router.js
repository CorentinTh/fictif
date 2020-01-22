import About from './routes/About.route';
import Character from './routes/Character.route';
import SearchPage from './routes/Home.route';
import VueRouter from 'vue-router';

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
