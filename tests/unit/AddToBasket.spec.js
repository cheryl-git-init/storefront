import { shallowMount } from '@vue/test-utils'
import AddToBasket from '@/components/AddToBasket.vue'

describe('AddToBasket.vue', () => {
  it('shows add button on load', () => {
    const wrapper = shallowMount(AddToBasket, {
      mocks: {
        $store: {
          getters: {
            itemIsInBasket: function () { return false }
          }
        }
      }
    })
    expect(wrapper.find('button').text()).toMatch("Add To Basket")
  })

  it('shows remove button if item exists in basket', () => {
    const wrapper = shallowMount(AddToBasket, {
      mocks: {
        $store: {
          getters: {
            itemIsInBasket: function () { return true }
          }
        }
      }
    })
    expect(wrapper.find('button').text()).toMatch("Remove")
  })
})
