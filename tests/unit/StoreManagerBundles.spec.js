import Vuex from 'vuex';
import StoreManagerBundles from '@/components/StoreManagerBundles.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('StoreManagerBundles.vue', () => {    
    const wrapper = shallowMount(StoreManagerBundles, {
        computed: { 
            bundles() {
                return [
                    {
                      name: "Brawler Bundle",
                      items: ["7dgX6XzU3Wds", "VqKb4tyj9V6i"]
                    },
                    {
                      name: "Money Bags",
                      items: ["IP3cv7TcZhQn", "500R5EHvNlNB"]
                    },
                    {
                      name: "Fighter",
                      items: ["7Hv0hA2nmci7", "PKM5pGAh9yGm", "7dgX6XzU3Wds"]
                    }
                  ]
            },
        },
        localVue,
    })
    it('displays as expected', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})
