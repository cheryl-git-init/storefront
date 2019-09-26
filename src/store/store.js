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
     * A more easily accessible data store - should contain Item ID as key and the value is a secondary object containing:
     * * name
     * * description
     * * usdPrice
     * * discount (percent)
     * * currentUsdPrice (affected by discount)
     * * currencySymbol
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
     * Creates an item object in allItemDetails
     * @param {*} state 
     * @param {*} payload 
     */
    createItemDetails: function (state, payload) {
      const itemObject = {}
      itemObject.name = payload[0].name
      itemObject.usdPrice = payload[0].usdPrice
      itemObject.currentUsdPrice = payload[0].usdPrice
      itemObject.description = payload[1]
      itemObject.discount = 0
      itemObject.currencySymbol = "$"
      Vue.set(state.allItemDetails, [payload[0].id], itemObject)
    },
    /**
     * Confirms if the initial data has finished loading
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
    /**
     * Resets discounts to allow them to be re-populated
     * @param {*} state 
     */
    clearAllDiscounts: function (state) {
      for (const item in state.allItemDetails) {
        state.allItemDetails[item].currentUsdPrice = state.allItemDetails[item].usdPrice
        state.allItemDetails[item].discount = 0
      }
    },
    /**
     * For a single item (by ID), add a provided discount percent
     * @param {*} state 
     * @param {Object} payload - itemID, percent discount
     */
    setItemDiscounts: function (state, payload) {
      const [ itemid, discount ] = payload
      const newDiscount = state.allItemDetails[itemid].discount + discount
      const cost = (state.allItemDetails[itemid].usdPrice / 100) * (100 - newDiscount)
      
      state.allItemDetails[itemid].currentUsdPrice = Math.round(cost)
      state.allItemDetails[itemid].discount = newDiscount
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
     * Gets the details object of an item from the item list by ID
     */
    getItemDetails: (state) => (id) => {
      return state.items.find(item => item.id === id)
    },
    /**
     * Gets an item from the more comprehensive details object
     */
    getItemInDepth: (state) => (id) => {
      return state.allItemDetails[id]
    },
    /**
     * Gets the current contents of the basket
     */
    getBasketContents: state => {
      return state.basket
    },
    /**
     * Gets the current basket price, taking into account discounts
     */
    getCurrentPrice: state => {
      if (!state.basket || state.basket.length === 0) {
        return "$0.00"
      } else {
        let totalPrice = 0;
        for (var i = 0; i < state.basket.length; i++) {
          totalPrice += state.allItemDetails[state.basket[i].id].currentUsdPrice
        }
        return `$${(totalPrice / 100).toFixed(2)}`
      }
    }
  },
  actions: {
    /**
     * Makes API call to get all item details from the provided endpoint. Sends these to setInitialItems.
     * @param {*} context 
     */
    getAllItems: async function (context) {
      if (context.getters.itemList.length < 1) {
        const returnedData = await axios.get("https://product-service.herokuapp.com/api/v1/products", {
          auth: {
            username: "user",
            password: "pass"
          }
        })
        context.dispatch('setInitialItems', returnedData.data)
      }
    },
    /**
     * Recieves data (payload) from getAllItems and calls mutations with these details
     * @param {*} context 
     * @param {*} payload 
     */
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
    /**
     * Adds an item to the basket by provided ID
     * @param {*} context 
     * @param {*} itemId 
     */
    addItemToBasket: function (context, itemId) {
      if (!context.getters.itemIsInBasket(itemId)) {
        context.commit('addToBasket', context.getters.getItemDetails(itemId))
        context.dispatch('manageBundleDiscounts')
      }
    },
    /**
     * Removes an item from the basket by provided ID
     * @param {*} context 
     * @param {*} itemId 
     */
    removeItemFromBasket: function (context, itemId) {
      if (context.getters.itemIsInBasket(itemId)) {
        context.commit('removeFromBasket', context.getters.getItemIndex(itemId))
        context.dispatch('manageBundleDiscounts')
      }
    },
    /**
     * When an item is added or removed from the basket, updates discounts
     * @param {*} context 
     */
    manageBundleDiscounts: function (context) {
      const bundlesList = context.getters.bundlesList
      context.commit('clearAllDiscounts')
      for (const bundle in bundlesList) {
        // If every item in the bundle is in the basket
        if (bundlesList[bundle]['items'].every(context.getters.itemIsInBasket)) {
          for (const item in bundlesList[bundle]['items']) {
            context.commit('setItemDiscounts',[bundlesList[bundle]['items'][item],10])
          }
        }
      }
    }
  }
})
