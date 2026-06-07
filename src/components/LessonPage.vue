<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import CodeBlock from './CodeBlock.vue'
import { lessons } from '../data/lessons'

const route = useRoute()

const currentLesson = computed(() => {
  if (route.name === 'K_12_DYNAMIC_MEMBER') {
    return lessons.find((lesson) => lesson.id === 'K_12') ?? lessons[0]
  }

  return lessons.find((lesson) => lesson.id === route.name) ?? lessons[0]
})
</script>

<template>
  <div class="app-shell">
    <aside class="sidebar" aria-label="Vue3 知识点导航">
      <div class="brand">
        <span class="brand-mark">V3</span>
        <div>
          <strong>Total Vue</strong>
          <small>中文案例学习库</small>
        </div>
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
          <strong>{{ lesson.title }}</strong>
        </RouterLink>
      </nav>
    </aside>

    <main class="lesson-page">
      <header class="lesson-header">
        <p class="eyebrow">{{ currentLesson.id }} · {{ currentLesson.category }}</p>
        <h1>{{ currentLesson.title }}</h1>
        <p>{{ currentLesson.summary }}</p>
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
</template>
