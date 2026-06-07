import { describe, expect, it, vi } from 'vitest'
import { useCountdown } from './useCountdown'

describe('useCountdown', () => {
  it('启动后按秒递减并在 0 停止', () => {
    vi.useFakeTimers()
    const { seconds, isFinished, start } = useCountdown(2)

    start()
    vi.advanceTimersByTime(1000)
    expect(seconds.value).toBe(1)

    vi.advanceTimersByTime(1000)
    expect(seconds.value).toBe(0)
    expect(isFinished.value).toBe(true)

    vi.useRealTimers()
  })
})
