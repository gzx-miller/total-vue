<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const memberId = computed(() => route.params.memberId ?? 'lee')
</script>

<template>
  <div class="demo-card">
    <h3>成员详情路由</h3>
    <p>当前成员参数：{{ memberId }}</p>
    <div class="button-row">
      <RouterLink to="/k-12/routing/lee">查看 Lee</RouterLink>
      <RouterLink to="/k-12/routing/ming">查看 Ming</RouterLink>
    </div>
  </div>
</template>
