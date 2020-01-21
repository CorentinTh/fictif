import About from './routes/About.route';
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
