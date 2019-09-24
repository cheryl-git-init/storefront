import Vuex from 'vuex';
import StoreFront from '@/views/StoreFront.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('StoreFront.vue', () => {
  test('ensuring that the component handling is not altered unexpectedly', () => {
    const wrapper = shallowMount(StoreFront, {
        localVue
    })
    expect(wrapper.html()).toMatch("<div><navbar-stub></navbar-stub> <storemanager-stub></storemanager-stub></div>")
  })
})
