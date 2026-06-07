import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import K07ComponentBasics from './K07ComponentBasics.vue'

describe('K07ComponentBasics', () => {
  it('保存标题并发出事件', async () => {
    const wrapper = mount(K07ComponentBasics, {
      props: {
        title: '旧标题',
      },
    })

    await wrapper.get('input').setValue('新标题')
    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('新标题')
    expect(wrapper.emitted('saved')?.[0]).toEqual(['新标题'])
  })
})
