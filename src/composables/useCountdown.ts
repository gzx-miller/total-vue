import { computed, onUnmounted, ref } from 'vue'

export function useCountdown(initialSeconds = 10) {
  const seconds = ref(initialSeconds)
  let timer: number | undefined

  const isFinished = computed(() => seconds.value <= 0)

  function start() {
    window.clearInterval(timer)
    seconds.value = initialSeconds
    timer = window.setInterval(() => {
      seconds.value = Math.max(0, seconds.value - 1)
      if (seconds.value === 0) {
        window.clearInterval(timer)
      }
    }, 1000)
  }

  function reset() {
    window.clearInterval(timer)
    seconds.value = initialSeconds
  }

  onUnmounted(reset)

  return {
    seconds,
    isFinished,
    start,
    reset,
  }
}
