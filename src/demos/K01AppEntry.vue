<script setup lang="ts">
const mountedTarget = '#app'
const plugins = ['Pinia', 'Vue Router']
</script>

<template>
  <div class="demo-card">
    <h3>咖啡店排班系统入口</h3>
    <p>入口文件创建应用实例，把全局插件注册好，最后挂载到 {{ mountedTarget }}。</p>
    <ul class="tag-list">
      <li v-for="plugin in plugins" :key="plugin">{{ plugin }}</li>
    </ul>
  </div>
</template>
