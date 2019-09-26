import Vuex from 'vuex';
import BasketItem from '@/components/BasketItem.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('BasketItem.vue', () => {
  test('storemanageritem-stubs are created on load', () => {
    const wrapper = shallowMount(BasketItem, {
      mocks: {
        $store: {
          getters: {
            getItemInDepth: function () { return {name:"test",currencySymbol:"$",currentUsdPrice:100,discount:10} }
          }
        }
      }
    })
    expect(wrapper.html()).toMatch('<div class="basket-item"><span>test</span> <span>$1.00</span> <span class="small-text">Inc. 10% discount!</span> <button class="remove-button">X</button></div>')
  })
})
