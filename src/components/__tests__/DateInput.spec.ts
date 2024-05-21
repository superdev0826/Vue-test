import { mount } from '@vue/test-utils'
import DateInput from '../ui/DateInput.vue'
import { describe, expect, it } from 'vitest'
describe('DateInput', () => {
  it('should update the v-model value when the input changes', async () => {
    const wrapper = mount(DateInput, {
      props: {
        modelValue: '2023-04-15'
      }
    })
    const input = wrapper.find('input')
    await input.setValue('04/15/2023')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['2023/04/15'])
  })
  it('should not allow invalid dates', async () => {
    const wrapper = mount(DateInput, {
      props: {
        modelValue: '2023-32-15'
      }
    })
    const input = wrapper.find('input')
    await input.setValue('13/32/2023')
    expect(wrapper.emitted('update:modelValue')?.flat(1)[0]).toBeUndefined() // return empty string
  })
  it('changes the mask based on locale', async () => {
    const lang = {
      en: 'en-US',
      uz: 'uz-UZ'
    }
    Object.defineProperty(window.navigator, 'language', {
      value: lang.en,
      configurable: true
    })
    const wrapper = mount(DateInput, {
      props: {
        modelValue: '2024-05-19'
      }
    })
    expect(wrapper.vm?.mask).toBe(lang.en === 'en-US' ? 'MM/DD/YYYY' : 'DD/MM/YYYY')
  })
})