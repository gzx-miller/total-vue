import { createRouter, createWebHistory } from 'vue-router'
import LessonPage from '../components/LessonPage.vue'
import { lessons } from '../data/lessons'

const lessonRoutes = lessons.map((lesson) => ({
  path: lesson.path,
  name: lesson.id,
  component: LessonPage,
  meta: {
    title: lesson.navTitle,
    knowledge: 'vue',
  },
}))

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/vue',
    },
    {
      path: '/vue',
      redirect: lessons[0].path,
    },
    ...lessonRoutes,
    {
      path: '/vue/k-12/routing/:memberId?',
      name: 'K_12_DYNAMIC_MEMBER',
      component: LessonPage,
      meta: {
        title: 'K_12 路由',
        knowledge: 'vue',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: lessons[0].path,
    },
  ],
})

router.beforeEach((to) => {
  document.title = `${String(to.meta.title ?? 'Vue3 案例')} - 小松鼠举栗子`
})

export default router
