import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    items: [],
    bundles: [
      { 
        name: "Brawler Bundle",
        items: [ "7dgX6XzU3Wds" , "VqKb4tyj9V6i" ]
      },
      { 
        name: "Money Bags",
        items: [ "IP3cv7TcZhQn" , "500R5EHvNlNB" ]
      },
      { 
        name: "Fighter",
        items: [ "7Hv0hA2nmci7" , "PKM5pGAh9yGm", "7dgX6XzU3Wds" ]
      }
    ],
    basket: [

    ]
  },
  mutations: {
    setNewItem (state, payload) {
      state.items.push(payload)
    },
    finishLoading (state) {
      state.loading = false
    },
    addToBasket (state, payload) {
      state.basket.push(payload)
    }
  },
  getters: {
    itemList: state => {
      return state.items
    },
    loadingInProgress: state => {
      return state.loading
    },
    itemIsInBasket: (state) => (id) => {
      if (state.basket.length > 1) {
        console.log(state.basket.length)
        return state.basket.find(item => item.id === id)
      }
      return false
    },
    getItemDetails: (state) => (id) => {
      return state.items.find(item => item.id === id)
    },
    getBasketContents: state => {
      return state.basket
    },
    getCurrentPrice: state => {
      if (!state.basket || state.basket.length === 0) {
        return "$0.00"
      } else {
        for (var item in state.basket) {
          console.log(item)
        }
      }
    }
  },
  actions: {
    setInitialItems (context, payload) {
      // I can't hear you over my cool loading stuff
      setTimeout(() => {
        for (var i = 0; i < payload.length; i++) {
          var thisItem = payload[i]
          context.commit('setNewItem',thisItem)
          context.commit('finishLoading')
        }
      }, 3000);
    },
    addItemToBasket (context,itemId) {
      console.log(1)
      if (!context.getters.itemIsInBasket(itemId)){
        console.log(context.getters.getItemDetails(itemId))
        context.commit('addToBasket',context.getters.getItemDetails(itemId))
      }
    },
    removeItemFromBasket (context,itemId) {

    }
  }
})
