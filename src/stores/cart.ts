import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [
      { id: 1, name: 'Vue3 课程', price: 129, count: 1 },
      { id: 2, name: '源码练习册', price: 59, count: 2 },
    ],
  }),
  getters: {
    total: (state) => state.items.reduce((sum, item) => sum + item.price * item.count, 0),
  },
  actions: {
    addCourse() {
      const course = this.items.find((item) => item.id === 1)
      if (course) {
        course.count += 1
      }
    },
  },
})
