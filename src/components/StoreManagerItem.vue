<template>
  <div class="store-item">
    <Icon v-if="loader"/>
    <template v-else>
        <router-link :to="link"><img v-bind:src="getImgLink()" height="80px"></router-link>
        <p>{{ name }}</p>
        <p>{{ currencySymbol }}{{ decimalPrice }}</p>
        <AddToBasket/>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import Icon from '@/components/Icon.vue'
import AddToBasket from '@/components/AddToBasket.vue'

export default {
  name: 'StoreManagerItem',
  props: {
      loader: Boolean,
      name: String,
      id: String,
      price: Number
  },
  components: {
      Icon,
      AddToBasket
  },
  data: function () {
    return {
        currencySymbol: "$",
        decimalPrice: "",
        link: ""
    }
  },
  methods: {
      getImgLink() {
          return require("@/assets/" + this.id + "_t.png")
      }
  },
  mounted: function () {
      this.link = "/item/" + this.id
      this.decimalPrice = (this.price / 100).toFixed(2)
  }
}
</script>

<style lang="scss" scoped>
.store-item {
    border: 1px solid peachpuff;
    max-height: 250px;
}
</style>
