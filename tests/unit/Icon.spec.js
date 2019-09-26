import Icon from '@/components/Icon.vue';
import { shallowMount } from '@vue/test-utils';


describe('Icon.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Icon)
    expect(wrapper.element).toMatchSnapshot()
  })
})
