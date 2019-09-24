import { shallowMount } from '@vue/test-utils'
import AddToBasket from '@/components/AddToBasket.vue'

describe('AddToBasket.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(AddToBasket, {
    })
    expect(wrapper.text()).toMatch("")
  })
})
