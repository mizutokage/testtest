import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// ルーティング
const routes = [
  {
    // 記事一覧ページ
    path: '/',
    name: "postList",
    component: () => import('./views/PostList.vue')
  },
  {
   // 記事詳細ページ
    path: '/post/:id',
    name: "postDetail",
    component: () => import('./views/PostDetail.vue')
  },
]

const router = new VueRouter({
  routes: routes,
  base: process.env.BASE_URL,
  mode: 'history',
  // ページ遷移の際の位置指定 指定がない場合 ページトップへ
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
});

export default router;