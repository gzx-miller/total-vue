<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import squirrelHero from '../assets/squirrel-chestnut-hero.png'
import { knowledgeCategories, lessons } from '../data/lessons'
import CodeBlock from './CodeBlock.vue'

const route = useRoute()

const categoryDetails: Record<string, { intro: string; officialUrl: string }> = {
  vue: {
    intro:
      'Vue3 是渐进式 JavaScript 框架，适合从单个交互组件逐步扩展到完整前端应用。本分类用真实小业务场景拆解组合式 API、组件、路由、状态管理和工程实践。',
    officialUrl: 'https://vuejs.org/',
  },
  typescript: {
    intro: 'TypeScript 为 JavaScript 增加静态类型系统，帮助团队在编码阶段发现接口、数据结构和重构风险。',
    officialUrl: 'https://www.typescriptlang.org/',
  },
  react: {
    intro: 'React 通过组件、状态和声明式渲染组织界面，适合构建交互复杂、状态变化频繁的前端应用。',
    officialUrl: 'https://react.dev/',
  },
  engineering: {
    intro: '工程化关注构建、测试、规范、部署和性能等协作基础，让前端项目在规模变大后仍然可维护。',
    officialUrl: 'https://vite.dev/',
  },
}

const isCategoryDrawerOpen = ref(true)

const activeKnowledge = computed(() => String(route.meta.knowledge ?? 'vue'))

const activeCategory = computed(() => {
  const category = knowledgeCategories.find((item) => item.id === activeKnowledge.value) ?? knowledgeCategories[0]
  const details = categoryDetails[category.id]

  return {
    ...category,
    intro: category.intro ?? details.intro,
    officialUrl: category.officialUrl ?? details.officialUrl,
  }
})

const currentLesson = computed(() => {
  if (route.name === 'K_12_DYNAMIC_MEMBER') {
    return lessons.find((lesson) => lesson.id === 'K_12') ?? lessons[0]
  }

  return lessons.find((lesson) => lesson.id === route.name) ?? lessons[0]
})

const nextLesson = computed(() => {
  const currentIndex = lessons.findIndex((lesson) => lesson.id === currentLesson.value.id)
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % lessons.length

  return lessons[nextIndex]
})

function closeCategoryDrawerOnScroll() {
  isCategoryDrawerOpen.value = false
}

function formatLessonId(id: string) {
  return id.replace('K_', '🌰')
}
onMounted(() => {
  window.addEventListener('scroll', closeCategoryDrawerOnScroll, { passive: true })
  window.addEventListener('wheel', closeCategoryDrawerOnScroll, { passive: true })
  window.addEventListener('touchmove', closeCategoryDrawerOnScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', closeCategoryDrawerOnScroll)
  window.removeEventListener('wheel', closeCategoryDrawerOnScroll)
  window.removeEventListener('touchmove', closeCategoryDrawerOnScroll)
})
</script>

<template>
  <div class="app-frame">
    <header class="top-nav">
      <RouterLink class="top-brand" to="/vue" aria-label="回到 Vue3 学习首页">
        <img class="brand-avatar" :src="squirrelHero" alt="小松鼠举着栗子" />
        <div>
          <strong>小松鼠举栗子</strong>
          <small>每个知识点，举个真实栗子</small>
        </div>
      </RouterLink>

      <nav class="knowledge-tabs" aria-label="知识类别导航">
        <RouterLink
          v-for="item in knowledgeCategories"
          :key="item.id"
          :to="item.status === 'ready' ? item.path : '/vue'"
          class="knowledge-tab"
          :class="{ active: item.id === activeKnowledge, planned: item.status === 'planned' }"
          :aria-disabled="item.status === 'planned'"
        >
          <span>{{ item.name }}</span>
          <small v-if="item.status === 'planned'">规划中</small>
        </RouterLink>
      </nav>
    </header>

    <div class="app-shell">
      <aside class="sidebar" aria-label="Vue3 知识点导航">
        <div class="sidebar-heading">
          <span>Vue3 学习顺序</span>
          <small>{{ lessons.length }} 个栗子</small>
        </div>

        <nav class="lesson-nav">
          <RouterLink
            v-for="lesson in lessons"
            :key="lesson.id"
            :to="lesson.path"
            class="lesson-link"
            :class="{ active: lesson.id === currentLesson.id }"
            :aria-label="`${formatLessonId(lesson.id)} ${lesson.navTitle}`"
            :title="lesson.navTitle"
          >
            <span>{{ formatLessonId(lesson.id) }}</span>
            <strong>{{ lesson.navTitle }}</strong>
          </RouterLink>
        </nav>
      </aside>

      <main class="lesson-page">
        <aside
          class="category-drawer"
          :class="{ collapsed: !isCategoryDrawerOpen }"
          aria-labelledby="category-drawer-title"
        >
          <button
            class="category-drawer-toggle"
            type="button"
            :aria-expanded="isCategoryDrawerOpen"
            aria-controls="category-drawer-panel"
            @click="isCategoryDrawerOpen = !isCategoryDrawerOpen"
          >
            {{ isCategoryDrawerOpen ? '收起' : '展开' }}
          </button>

          <div id="category-drawer-panel" class="category-drawer-panel">
            <h2 id="category-drawer-title">{{ activeCategory.name }}</h2>
            <p>{{ activeCategory.intro }}</p>
            <a :href="activeCategory.officialUrl" target="_blank" rel="noreferrer">
              官网地址：{{ activeCategory.officialUrl }}
            </a>
          </div>
        </aside>

        <header class="lesson-header">
          <div class="lesson-copy">
            <p class="eyebrow">{{ formatLessonId(currentLesson.id) }} · {{ currentLesson.category }}</p>
            <h1>{{ currentLesson.title }}</h1>
            <p>{{ currentLesson.summary }}</p>
          </div>
        </header>

        <section class="lesson-section">
          <h2>案例演示</h2>
          <component :is="currentLesson.demo" />
        </section>

        <section class="lesson-section">
          <h2>关键代码</h2>
          <CodeBlock :code="currentLesson.code" :language="currentLesson.language" />
        </section>

        <section class="lesson-details">
          <article v-if="currentLesson.principle">
            <h2>原理</h2>
            <p>{{ currentLesson.principle }}</p>
          </article>
          <article v-if="currentLesson.flow.length">
            <h2>处理流程</h2>
            <ol>
              <li v-for="step in currentLesson.flow" :key="step">{{ step }}</li>
            </ol>
          </article>
          <article v-if="currentLesson.notes.length">
            <h2>注意事项</h2>
            <ul>
              <li v-for="note in currentLesson.notes" :key="note">{{ note }}</li>
            </ul>
          </article>
          <article v-if="currentLesson.problem">
            <h2>解决的问题</h2>
            <p>{{ currentLesson.problem }}</p>
          </article>
        </section>
        <nav class="lesson-next" aria-label="下一章节">
          <RouterLink class="next-lesson-link" :to="nextLesson.path">
            <span>下一颗</span>
            <strong>{{ formatLessonId(nextLesson.id) }} {{ nextLesson.navTitle }}</strong>
          </RouterLink>
        </nav>
      </main>
    </div>
  </div>
</template>
