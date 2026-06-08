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
const isSidebarTemporarilyExpanded = ref(false)
const lastKnownWidth = ref(window.innerWidth)
const popoverVisible = ref<Record<string, boolean>>({})

function showPopover(id: string) {
  popoverVisible.value[id] = true
}

function hidePopover(id: string) {
  popoverVisible.value[id] = false
}

const activeKnowledge = computed(() => String(route.meta.knowledge ?? 'vue'))

const filteredLessons = computed(() => {
  return lessons.filter((lesson) => {
    if (activeKnowledge.value === 'vue') {
      return lesson.path.startsWith('/vue')
    }
    if (activeKnowledge.value === 'element-plus') {
      return lesson.path.startsWith('/element-plus')
    }
    return true
  })
})

const currentLesson = computed(() => {
  if (route.name === 'K_12_DYNAMIC_MEMBER') {
    return lessons.find((lesson) => lesson.id === 'K_12') ?? lessons[0]
  }

  return lessons.find((lesson) => lesson.id === route.name) ?? lessons[0]
})

const nextLesson = computed(() => {
  const currentIndex = filteredLessons.value.findIndex((lesson) => lesson.id === currentLesson.value.id)
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % filteredLessons.value.length

  return filteredLessons.value[nextIndex]
})

function closeCategoryDrawerOnScroll() {
  isCategoryDrawerOpen.value = false
}

function getCategoryDetails(id: string) {
  const details = categoryDetails[id]
  return details ?? { intro: '', officialUrl: '' }
}

function formatLessonId(id: string) {
  if (id.startsWith('E_')) {
    return id.replace('E_', '🌰')
  }
  return id.replace('K_', '🌰')
}

function toggleSidebar() {
  isSidebarTemporarilyExpanded.value = !isSidebarTemporarilyExpanded.value
}

function handleResize() {
  const newWidth = window.innerWidth
  if (newWidth !== lastKnownWidth.value) {
    isSidebarTemporarilyExpanded.value = false
  }
  lastKnownWidth.value = newWidth
}

onMounted(() => {
  window.addEventListener('scroll', closeCategoryDrawerOnScroll, { passive: true })
  window.addEventListener('wheel', closeCategoryDrawerOnScroll, { passive: true })
  window.addEventListener('touchmove', closeCategoryDrawerOnScroll, { passive: true })
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', closeCategoryDrawerOnScroll)
  window.removeEventListener('wheel', closeCategoryDrawerOnScroll)
  window.removeEventListener('touchmove', closeCategoryDrawerOnScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="app-frame">
    <header class="top-nav">
      <RouterLink class="top-brand" to="/vue" aria-label="回到 Vue3 学习首页">
        <img class="brand-avatar" :src="squirrelHero" alt="小松鼠举着栗子" />
        <div>
          <strong>小松鼠举栗子</strong>
          <span >gzx_miller@foxmail.com</span>
        </div>
      </RouterLink>

      <nav class="knowledge-tabs" aria-label="知识类别导航">
        <div
          v-for="item in knowledgeCategories"
          :key="item.id"
          class="knowledge-tab-wrapper"
        >
          <RouterLink
            :to="item.status === 'ready' ? item.path : '/vue'"
            class="knowledge-tab"
            :class="{ active: item.id === activeKnowledge, planned: item.status === 'planned' }"
            :aria-disabled="item.status === 'planned'"
            @mouseenter="showPopover(item.id)"
            @mouseleave="hidePopover(item.id)"
          >
            <span>{{ item.name }}</span>
            <small v-if="item.status === 'planned'">规划中</small>
          </RouterLink>
          <Transition name="fade">
            <div v-if="popoverVisible[item.id]" class="popover-panel">
              <p class="popover-intro">{{ item.intro || getCategoryDetails(item.id).intro }}</p>
            </div>
          </Transition>
        </div>
      </nav>
    </header>

    <div class="app-shell" :class="{ 'sidebar-expanded': isSidebarTemporarilyExpanded }">
      <aside class="sidebar" :class="{ 'sidebar-temporarily-expanded': isSidebarTemporarilyExpanded }" aria-label="Vue3 知识点导航">
        <div class="sidebar-heading">
          <button
            class="sidebar-toggle"
            :class="{ expanded: isSidebarTemporarilyExpanded }"
            @click="toggleSidebar"
            :aria-label="isSidebarTemporarilyExpanded ? '收起侧边栏' : '展开侧边栏'"
          >
            <span class="toggle-icon" aria-hidden="true"></span>
          </button>
        </div>

        <nav class="lesson-nav">
          <RouterLink
            v-for="lesson in filteredLessons"
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
          <div class="bottom-nav-row">
            <a
              v-if="getCategoryDetails(activeKnowledge).officialUrl"
              :href="getCategoryDetails(activeKnowledge).officialUrl"
              target="_blank"
              rel="noopener"
              class="official-link"
            >
              {{ getCategoryDetails(activeKnowledge).intro?.includes('Element') ? 'Element Plus 官网' : `${activeKnowledge.charAt(0).toUpperCase() + activeKnowledge.slice(1)} 官网` }} →
            </a>
            <RouterLink class="next-lesson-link" :to="nextLesson.path">
              <span>下一颗</span>
              <strong>{{ formatLessonId(nextLesson.id) }} {{ nextLesson.navTitle }}</strong>
            </RouterLink>
          </div>
        </nav>
      </main>
    </div>
  </div>
</template>
