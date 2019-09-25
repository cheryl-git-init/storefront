import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import NavButtonBasket from '@/components/NavButtonBasket.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('NavButtonBasket.vue', () => {
    const wrapper = shallowMount(NavButtonBasket, {
        mocks: {
            $store: {
                getters: {
                    getCurrentPrice: jest.fn()
                }
            },
            methods: {
                toggleBasket: jest.fn()
            }
        }
    })
    it('does not have a basket overlay or basket element on load', () => {
        expect(wrapper.find(".basket-overlay").exists()).toBe(false)
        expect(wrapper.find("basket-stub").exists()).toBe(false)
    })

    it('has a basket overlay and displays the basket if "basketIsDisplayed" is true', () => {
        wrapper.setData({ basketIsDisplayed: true })
        expect(wrapper.find(".basket-overlay").exists()).toBe(true)
        expect(wrapper.find("basket-stub").exists()).toBe(true)
    })
})
