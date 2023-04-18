import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    //我事先在src下面创建了一个view文件夹，在view文件下面创建了home.vue文件
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
