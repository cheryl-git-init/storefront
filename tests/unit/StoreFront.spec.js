import Vuex from 'vuex';
import StoreFront from '@/views/StoreFront.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('StoreFront.vue', () => {
  const actions = {
    getAllItems: jest.fn()
  }
  const store = new Vuex.Store({
    actions
  })
  const wrapper = shallowMount(StoreFront, {
    store,
    localVue
  })
  test('ensuring that the component handling is not altered unexpectedly', () => {
    expect(wrapper.html()).toMatch("<div><navbar-stub></navbar-stub> <storemanager-stub></storemanager-stub></div>")
  })
  it('calls getAllItems on load', () => {
    expect(actions.getAllItems).toBeCalled()
  })
})
