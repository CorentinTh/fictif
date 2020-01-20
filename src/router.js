import Home from './routes/Home.route';
import About from './routes/About.route';
import Details from './routes/Details.route';
import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/details',
    component: Details
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
