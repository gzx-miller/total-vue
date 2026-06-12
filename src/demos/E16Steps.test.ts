import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import E16Steps from './E16Steps.vue'

describe('E16Steps', () => {
  it('推进流程并支持重置', async () => {
    const wrapper = mount(E16Steps)
    const nextButton = wrapper.findAll('button').find((button) => button.text() === '推进下一步')
    const resetButton = wrapper.findAll('button').find((button) => button.text() === '重新开始')

    expect(wrapper.text()).toContain('当前：提交报名')

    await nextButton?.trigger('click')
    expect(wrapper.text()).toContain('当前：资料审核')

    await resetButton?.trigger('click')
    expect(wrapper.text()).toContain('当前：提交报名')
  })
})
