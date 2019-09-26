import Vuex from 'vuex';
import ItemPage from '@/views/ItemPage.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ItemPage.vue', () => {
    const actions = {
        getAllItems: jest.fn()
    }
    const store = new Vuex.Store({
        actions
    })
    
    const wrapper = shallowMount(ItemPage, {
        namespaced: false,
        computed: { getItemInDepth() { return { name: "test", currencySymbol: "$", usdPrice: 200, description: "test here" } } },
        methods: { getImgLink() {return ""} },
        store,
        localVue,
    })
    it('recieves and displays the correct data', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
    it('calls getAllItems on load', () => {
        expect(actions.getAllItems).toBeCalled()
    })
})
