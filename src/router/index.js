import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Page1 from '../views/Page1.vue';  // 引入新的页面组件
import Page2 from '../views/Page2.vue';  // 引入新的页面组件
import Page3 from '../views/Page3.vue';  // 引入新的页面组件

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/page1', name: 'Page1', component: Page1 },  // 新增的路由
  { path: '/page2', name: 'Page2', component: Page2 },  // 新增的路由
  { path: '/page3', name: 'Page3', component: Page3 },  // 新增的路由
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;