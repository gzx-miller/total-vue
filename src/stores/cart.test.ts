import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCartStore } from './cart'

describe('useCartStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('计算课程购物车总价', () => {
    const cart = useCartStore()

    expect(cart.total).toBe(247)
  })

  it('通过 action 增加课程数量', () => {
    const cart = useCartStore()

    cart.addCourse()

    expect(cart.items[0].count).toBe(2)
    expect(cart.total).toBe(376)
  })
})
