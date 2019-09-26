import Vuex from 'vuex';
import StoreManagerBundleItem from '@/components/StoreManagerBundleItem.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('StoreManagerBundleItem.vue', () => {    
    const wrapper = shallowMount(StoreManagerBundleItem, {
        propsData: { 
            item: "test"
        },
        computed: { 
            itemDetails() {
                return {
                    name: "Item"
                }
            },
            itemIsInBasket() {
                return false
            },
        },
        localVue,
    })
    it('displays as expected', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})
