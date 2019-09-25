import Vuex from 'vuex';
import StoreManager from '@/components/StoreManager.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('StoreManager.vue', () => {
  test('storemanageritem-stubs are created on load', () => {
    const wrapper = shallowMount(StoreManager, {
      mocks: {
        $store: {
          getters: {
            itemList: function () { return [] },
            loadingInProgress: function () { return true }
          }
        }
      }
    })
    expect(wrapper.find("storemanageritem-stub").exists()).toBe(true)
  })
})
