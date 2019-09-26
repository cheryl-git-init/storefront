import { shallowMount } from '@vue/test-utils'
import Basket from '@/components/Basket.vue'

describe('Basket.vue', () => {
  it('shows empty basket message on load', () => {
    const wrapper = shallowMount(Basket, {
      mocks: {
        $store: {
          getters: {
            getBasketContents: function () { return [] }
          }
        }
      }
    })
    expect(wrapper.find(".basket-empty-message").exists()).toBe(true)
  })

  it('does not show empty basket message if there is basket contents', () => {
    const wrapper = shallowMount(Basket, {
      mocks: {
        $store: {
          getters: {
            getBasketContents: (state) => [{name:"test",id:"testid"},{name:"test2",id:"testid2"}]
          }
        }
      }
    })
    expect(wrapper.find(".basket-empty-message").exists()).toBe(false)
  })
})
