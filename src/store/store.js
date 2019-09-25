import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { async } from 'q'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    items: [],
    bundles: [
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
    ],
    basket: [],
    /**
     * A more easily accessible data store - should contain Item ID as key and value is secondary object
     */
    allItemDetails: {}
  },
  mutations: {
    /**
     * Push an item object into the items array
     * @param {*} state 
     * @param {*} payload 
     */
    setNewItem: function (state, payload) {
      state.items.push(payload)
    },
    /**
     * 
     * @param {*} state 
     * @param {*} payload 
     */
    createItemDetails: function (state, payload) {
      const itemObject = {}
      itemObject.name = payload[0].name
      itemObject.usdPrice = payload[0].usdPrice
      // TODO: consider adding localised currency.
      itemObject.currentUsdPrice = payload[0].usdPrice
      itemObject.description = payload[1]
      itemObject.discount = 0
      itemObject.currencySymbol = "$"
      console.log(itemObject)
      state.allItemDetails[payload[0].id] = itemObject
      console.log(state.allItemDetails)
    },
    /**
     * 
     * @param {*} state 
     */
    finishLoading: function (state) {
      state.loading = false
    },
    /**
     * Add item to basket
     * @param {*} state 
     * @param {Object} payload - The item details to add to the basket
     */
    addToBasket: function (state, payload) {
      state.basket.push(payload)
    },
    /**
     * Remove item from basket by ID
     * @param {*} state 
     * @param {String} payload - the index of the item to remove from basket
     */
    removeFromBasket: function (state, payload) {
      state.basket.splice(payload, 1)
    },
    clearAllDiscounts: function (state) {
      for (const item in state.allItemDetails) {
        state.allItemDetails[item].currentUsdPrice = state.allItemDetails[item].usdPrice
        state.allItemDetails[item].discount = 0
      }
    },
    setItemDiscounts: function (state, payload) {

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
    getItemBundles: (state) => (id) => {
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
    setInitialItems: async function (context, payload) {
      for (var i = 0; i < payload.length; i++) {
        const thisItem = payload[i]
        const {data} = await axios.get("https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1&format=text")
        context.commit('setNewItem', thisItem)
        context.commit('createItemDetails', [thisItem, data])
      }
      // I can't hear you over my cool loading stuff
      setTimeout(() => {
        context.commit('finishLoading')
      }, 3000);
    },
    addItemToBasket: function (context, itemId) {
      if (!context.getters.itemIsInBasket(itemId)) {
        context.commit('addToBasket', context.getters.getItemDetails(itemId))
        context.dispatch('manageBundleDiscounts')
      }
    },
    removeItemFromBasket: function (context, itemId) {
      if (context.getters.itemIsInBasket(itemId)) {
        context.commit('removeFromBasket', context.getters.getItemIndex(itemId))
        context.dispatch('manageBundleDiscounts')
      }
    },
    manageBundleDiscounts: function (context) {
      const currentBasket = context.getters.getBasketContents
      const bundlesList = context.getters.bundlesList

      // TODO: Clear all bundles here

      for (const bundle in bundlesList) {
        // If every item in the bundle is in the basket
        if (bundlesList[bundle]['items'].every(context.getters.itemIsInBasket)) {
          console.log("success, found a bundle")
          for (const item in bundlesList[bundle]['items']) {
            // TODO: for each item, set a discount
          }
        }
        //itemIsInBasket
      }
    }
  }
})
