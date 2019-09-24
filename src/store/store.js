import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    /**
     * 
     * @param {*} state 
     * @param {*} payload 
     */
    setNewItem (state, payload) {
      state.items.push(payload)
    },
    /**
     * 
     * @param {*} state 
     */
    finishLoading (state) {
      state.loading = false
    },
    /**
     * Add item to basket
     * @param {*} state 
     * @param {Array} payload - The item details to add to the basket
     */
    addToBasket (state, payload) {
      state.basket.push(payload)
    },
    /**
     * Remove item from basket by ID
     * @param {*} state 
     * @param {String} payload - the index of the item to remove from basket
     */
    removeFromBasket (state, payload) {
      state.basket.splice(payload,1)
      
    }
  },
  getters: {
    /**
     * Returns all items
     */
    itemList: state => {
      return state.items
    },
    /**
     * Returns all bundles
     */
    bundlesList: state => {
      return state.bundles
    },
    /**
     * Returns true if still loading
     */
    loadingInProgress: state => {
      return state.loading
    },
    /**
     * Confirms if an item (by ID) exists in the basket
     */
    itemIsInBasket: (state) => (id) => {
      if (state.basket.length > 0) {
        return state.basket.find(item => item.id === id)
      }
      return false
    },
    /**
     * Gets the index of an item's place in the basket by ID
     */
    getItemIndex: (state) => (id) => {
      return state.basket.findIndex(item => item.id === id)
    },
    /**
     * 
     */
    getItemDetails: (state) => (id) => {
      return state.items.find(item => item.id === id)
    },
    /**
     * 
     */
    getBasketContents: state => {
      return state.basket
    },
    /**
     * 
     */
    getCurrentPrice: state => {
      if (!state.basket || state.basket.length === 0) {
        return "$0.00"
      } else {
        let totalPrice = 0;
        for (var i = 0; i < state.basket.length; i++) {
          totalPrice += state.basket[i]["usdPrice"]
        }
        return `$${(totalPrice / 100).toFixed(2)}`
      }
    },
    /**
     * Find all bundles containing item ID
     */
    getItemBundles: (state) => (id) =>{
      let availableBundles = []
      for (let item in state.bundles) {
        if ((state.bundles[item].items).includes(id)) {
          availableBundles.push(state.bundles[item].items)
        }
      }
      return availableBundles
    }
  },
  actions: {
    getAllItems: async function (context) {
      if (context.getters.itemList.length < 1) {
        const returnedData = await axios.get("https://product-service.herokuapp.com/api/v1/products", {
          auth: {
            username: "user",
            password: "pass"
          }
        }).catch(error => error)
        context.dispatch('setInitialItems', returnedData.data)
      }
    },
    setInitialItems: function (context, payload) {
      // I can't hear you over my cool loading stuff
      setTimeout(() => {
        for (var i = 0; i < payload.length; i++) {
          var thisItem = payload[i]
          context.commit('setNewItem',thisItem)
          context.commit('finishLoading')
        }
      }, 3000);
    },
    addItemToBasket: function (context,itemId) {
      if (!context.getters.itemIsInBasket(itemId)){
        context.commit('addToBasket',context.getters.getItemDetails(itemId))
        context.dispatch('manageBundleDiscounts')
      }
    },
    removeItemFromBasket: function (context,itemId) {
      if (context.getters.itemIsInBasket(itemId)){
        context.commit('removeFromBasket',context.getters.getItemIndex(itemId))
        context.dispatch('manageBundleDiscounts')
      }
    },
    manageBundleDiscounts: function (context) {
      const currentBasket = context.getters.getBasketContents
      const bundlesList = context.getters.bundlesList
      // for (var i = 0; i < currentBasket.length; i++) {
      //   context.getters.getItemBundles(currentBasket[i].id)
      // }
      for (const bundle in bundlesList) {
        console.log(bundlesList[bundle])
        const bundleLength = bundlesList[bundle].length
        let checkedLength = 0
        console.log(bundlesList[bundle])
        for (const item in bundlesList[bundle]) {
          if (context.getters.itemIsInBasket(item)) {

          } 
        }
        if (bundlesList[bundle]['items'].every(context.getters.itemIsInBasket)) {
          console.log("success, found a bundle")
        }
        //itemIsInBasket
      }
    }
  }
})
