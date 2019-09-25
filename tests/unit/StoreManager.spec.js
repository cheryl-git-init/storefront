import Vuex from 'vuex';
import StoreManager from '@/components/StoreManager.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('StoreManager.vue', () => {
  test('ensuring that the component handling is not altered unexpectedly', () => {
    const wrapper = shallowMount(StoreManager, {
        localVue
    })
    expect(wrapper.html()).toMatch("<div><navbar-stub></navbar-stub> <storemanager-stub></storemanager-stub></div>")
  })
})
