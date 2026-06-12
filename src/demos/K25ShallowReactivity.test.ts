import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import K25ShallowReactivity from './K25ShallowReactivity.vue'

describe('K25ShallowReactivity', () => {
  it('批量修改后通过 triggerRef 刷新库存视图', async () => {
    const wrapper = mount(K25ShallowReactivity)
    const buttons = wrapper.findAll('button')

    expect(wrapper.text()).toContain('库存 12')

    await buttons.find((button) => button.text() === '只修改深层数据')?.trigger('click')
    expect(wrapper.text()).toContain('库存 12')

    await buttons.find((button) => button.text() === 'triggerRef 刷新视图')?.trigger('click')
    expect(wrapper.text()).toContain('库存 11')
  })
})
