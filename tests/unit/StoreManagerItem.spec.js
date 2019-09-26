import Vuex from 'vuex';
import StoreManagerItem from '@/components/StoreManagerItem.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('StoreManagerItem.vue', () => {    
    const wrapper = shallowMount(StoreManagerItem, {
        propsData: { 
            loader: false,
            name: "test",
            id: "1253a",
            price: 300
        },
        stubs: ['router-link'],
        methods: { getImgLink() {return ""} },
        localVue,
    })
    it('recieves and displays the correct data based on props', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})
