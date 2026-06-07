<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import squirrelHero from '../assets/squirrel-chestnut-hero.png'
import { knowledgeCategories, lessons } from '../data/lessons'
import CodeBlock from './CodeBlock.vue'

const route = useRoute()

const activeKnowledge = computed(() => String(route.meta.knowledge ?? 'vue'))

const currentLesson = computed(() => {
  if (route.name === 'K_12_DYNAMIC_MEMBER') {
    return lessons.find((lesson) => lesson.id === 'K_12') ?? lessons[0]
  }

  return lessons.find((lesson) => lesson.id === route.name) ?? lessons[0]
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
          >
            <span>{{ lesson.id }}</span>
            <strong>{{ lesson.navTitle }}</strong>
          </RouterLink>
        </nav>
      </aside>

      <main class="lesson-page">
        <header class="lesson-header">
          <div class="lesson-copy">
            <p class="eyebrow">{{ currentLesson.id }} · {{ currentLesson.category }}</p>
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

        <section class="lesson-grid">
          <article>
            <h2>原理</h2>
            <p>{{ currentLesson.principle }}</p>
          </article>
          <article>
            <h2>处理流程</h2>
            <ol>
              <li v-for="step in currentLesson.flow" :key="step">{{ step }}</li>
            </ol>
          </article>
          <article>
            <h2>注意事项</h2>
            <ul>
              <li v-for="note in currentLesson.notes" :key="note">{{ note }}</li>
            </ul>
          </article>
          <article>
            <h2>解决的问题</h2>
            <p>{{ currentLesson.problem }}</p>
          </article>
        </section>
      </main>
    </div>
  </div>
</template>
