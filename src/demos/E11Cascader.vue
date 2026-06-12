<script setup lang="ts">
import { ref } from 'vue'
import { ElCascader } from 'element-plus'

const selectedPath = ref<string[]>([])

const options = [
  {
    value: 'frontend',
    label: '前端开发',
    children: [
      {
        value: 'vue',
        label: 'Vue',
        children: [
          { value: 'vue3-basics', label: 'Vue3 基础入门' },
          { value: 'vue3-composition', label: '组合式 API' },
          { value: 'pinia', label: 'Pinia 状态管理' },
        ],
      },
      {
        value: 'react',
        label: 'React',
        children: [
          { value: 'react-hooks', label: 'Hooks 实战' },
          { value: 'nextjs', label: 'Next.js 全栈' },
        ],
      },
      {
        value: 'engineering',
        label: '工程化',
        children: [
          { value: 'vite', label: 'Vite 构建' },
          { value: 'testing', label: '自动化测试' },
        ],
      },
    ],
  },
  {
    value: 'backend',
    label: '后端开发',
    children: [
      {
        value: 'node',
        label: 'Node.js',
        children: [
          { value: 'express', label: 'Express 入门' },
          { value: 'nestjs', label: 'NestJS 企业级' },
        ],
      },
    ],
  },
]

const cascaderCode = `// ElCascader 关键属性
<ElCascader
  v-model="selectedPath"     // 绑定值为路径数组
  :options="options"          // 级联数据源
  :props="{ expandTrigger: 'hover' }"  // 悬浮展开
  clearable                   // 可清空
  placeholder="选择课程分类"
/>`
</script>

<template>
  <div class="demo-card">
    <h3>级联选择 Cascader</h3>

    <div class="demo-section">
      <h4>课程分类选择</h4>
      <ElCascader
        v-model="selectedPath"
        :options="options"
        :props="{ expandTrigger: 'hover' }"
        clearable
        placeholder="选择课程分类"
        style="width: 100%; max-width: 400px"
      />
      <div v-if="selectedPath.length" class="selected-info">
        <p><strong>选中路径：</strong>{{ selectedPath.join(' / ') }}</p>
      </div>
    </div>

    <div class="code-section">
      <h4>关键代码</h4>
      <pre class="code-block">{{ cascaderCode }}</pre>
    </div>
  </div>
</template>

<style scoped>
.demo-section { background: #fef9f3; border: 1px solid #e8c9a0; border-radius: 8px; padding: 16px; margin-bottom: 12px; }
h4 { margin: 0 0 10px; color: #8b5e3c; font-size: 14px; }
.selected-info { margin-top: 12px; padding: 8px 12px; background: #f0f7f2; border-radius: 6px; }
.selected-info p { margin: 0; font-size: 13px; color: #2d5a3a; }
.code-section { background: #f0f7f2; border: 1px solid #a8d5b8; border-radius: 8px; padding: 12px; }
.code-block { margin: 8px 0 0; font-size: 12px; line-height: 1.6; white-space: pre-wrap; color: #2d5a3a; }
</style>
