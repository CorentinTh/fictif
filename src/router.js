import Home from './routes/Home.route';
import About from './routes/About.route';
import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
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
