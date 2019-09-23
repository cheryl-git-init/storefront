<template>
  <div>
    <NavBar/>
    <StoreManager/>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import StoreManager from '@/components/StoreManager.vue'
import { async } from 'q'

export default {
  name: 'store',
  components: {
    NavBar,
    StoreManager
  },
  data: function() {
    return {}
  },
  methods: {
    getData: async function () {
      if (!this.doItemsExist) {
        const returnedData = await axios.get("https://product-service.herokuapp.com/api/v1/products", {
          auth: {
            username: "user",
            password: "pass"
          }
        }).catch(error => error)
        console.log(returnedData.data)
        this.$store.dispatch('setInitialItems', returnedData.data)
      }
    }
  },
  mounted: function() {
    this.getData()
  },
  computed: {
    doItemsExist () {
      console.log(this.$store.getters.itemList)
      return (this.$store.getters.itemList).length > 0
    }
  }
}
</script>
