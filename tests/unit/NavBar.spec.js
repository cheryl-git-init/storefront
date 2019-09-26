import NavBar from '@/components/NavBar.vue';
import { shallowMount } from '@vue/test-utils';


describe('NavBar.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(NavBar, {
        stubs: ['router-link']
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
