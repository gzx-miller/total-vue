<script setup lang="ts">
import { computed, ref } from 'vue'
import { ElButton, ElStep, ElSteps } from 'element-plus'

const activeStep = ref(0)
const steps = ['提交报名', '资料审核', '确认名额', '开始学习']

const currentStatus = computed(() =>
  activeStep.value === steps.length ? '报名流程已完成' : `当前：${steps[activeStep.value]}`,
)

function nextStep() {
  activeStep.value = Math.min(activeStep.value + 1, steps.length)
}

function resetSteps() {
  activeStep.value = 0
}
</script>

<template>
  <div class="demo-card steps-demo">
    <div>
      <p class="demo-kicker">报名状态追踪</p>
      <h3>训练营入学流程</h3>
    </div>

    <ElSteps :active="activeStep" finish-status="success" align-center>
      <ElStep v-for="step in steps" :key="step" :title="step" />
    </ElSteps>

    <div class="step-status">{{ currentStatus }}</div>

    <div class="button-row">
      <ElButton type="primary" :disabled="activeStep === steps.length" @click="nextStep">
        推进下一步
      </ElButton>
      <ElButton @click="resetSteps">重新开始</ElButton>
    </div>
  </div>
</template>

<style scoped>
.steps-demo {
  display: grid;
  gap: 18px;
}

.steps-demo h3,
.demo-kicker {
  margin: 0;
}

.demo-kicker {
  color: #8f2f18;
  font-size: 12px;
  font-weight: 700;
}

.step-status {
  border: 1px solid #efc48d;
  border-radius: 7px;
  background: #fffaf2;
  padding: 12px;
  color: #8f2f18;
  font-weight: 700;
  text-align: center;
}

@media (max-width: 520px) {
  :deep(.el-step__title) {
    font-size: 11px;
    line-height: 1.3;
  }
}
</style>
