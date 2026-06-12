import { createRouter, createWebHistory } from 'vue-router'
import LessonPage from '../components/LessonPage.vue'
import { lessons } from '../data/lessons'

const siteTitle = '\u5c0f\u677e\u9f20\u4e3e\u6817\u5b50'

function getKnowledgeFromPath(path: string): string {
  if (path.startsWith('/vue/')) return 'vue'
  if (path.startsWith('/element-plus/')) return 'element-plus'
  if (path.startsWith('/react/')) return 'react'
  if (path.startsWith('/langchain/')) return 'langchain'
  return 'vue'
}

const lessonRoutes = lessons.map((lesson) => ({
  path: lesson.path,
  name: lesson.id,
  component: LessonPage,
  meta: {
    title: lesson.navTitle,
    knowledge: getKnowledgeFromPath(lesson.path),
  },
}))

const normalizeLegacyTotalVuePath = (pathMatch: string | string[] | undefined) => {
  const legacyPath = Array.isArray(pathMatch) ? pathMatch.join('/') : (pathMatch ?? '')

  return legacyPath.startsWith('vue/') ? `/${legacyPath}` : '/vue'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/total-vue',
      redirect: '/vue',
    },
    {
      path: '/total-vue/:pathMatch(.*)*',
      redirect: (to) => normalizeLegacyTotalVuePath(to.params.pathMatch as string | string[] | undefined),
    },
    {
      path: '/',
      redirect: '/vue',
    },
    {
      path: '/vue',
      redirect: lessons.find((l) => l.path.startsWith('/vue'))?.path ?? '/vue/k-1/app-entry',
    },
    {
      path: '/element-plus',
      redirect: lessons.find((l) => l.path.startsWith('/element-plus'))?.path ?? '/element-plus/e-1/button',
    },
    {
      path: '/react',
      redirect: lessons.find((l) => l.path.startsWith('/react'))?.path ?? '/react/r-1/component-props',
    },
    {
      path: '/langchain',
      redirect: lessons.find((l) => l.path.startsWith('/langchain'))?.path ?? '/langchain',
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
      redirect: lessons.find((l) => l.path.startsWith('/vue'))?.path ?? '/vue/k-1/app-entry',
    },
  ],
})

router.beforeEach((to) => {
  document.title = `${String(to.meta.title ?? '知识案例')} - ${siteTitle}`
})

export default router
