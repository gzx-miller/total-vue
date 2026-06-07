import { createRouter, createWebHistory } from 'vue-router'
import LessonPage from '../components/LessonPage.vue'
import { lessons } from '../data/lessons'

const siteTitle = '\u5c0f\u677e\u9f20\u4e3e\u6817\u5b50'

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
  history: createWebHistory(import.meta.env.BASE_URL),
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
        title: '\u{1F330}12 \u8def\u7531',
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
  document.title = `${String(to.meta.title ?? 'Vue3 \u6848\u4f8b')} - ${siteTitle}`
})

export default router
