<template>
  <div>
    <div class="basket-display" v-on:click="toggleBasket">
      <i class="fas fa-shopping-basket fa-3x" :class="{'active': basketIsDisplayed}"></i>
      <p>{{ currentBasketCost }}</p>
    </div>
    <Basket v-if="basketIsDisplayed" />
  </div>
</template>

<script>
// @ is an alias to /src
import Basket from "@/components/Basket.vue";

export default {
  name: "NavButtonBasket",
  components: {
    Basket
  },
  data: function() {
    return {
      basketIsDisplayed: false
    };
  },
  methods: {
    toggleBasket: function() {
      this.basketIsDisplayed = !this.basketIsDisplayed;
    }
  },
  computed: {
    currentBasketCost() {
      return this.$store.getters.getCurrentPrice;
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  right: 0;
  top: 0;
  margin: 10px;
  position: absolute;
}
.basket-display {
  right: 0;
  top: 0;
  margin: 15px 10px;
  position: absolute;
  cursor: pointer;
}
.active {
  color: blue;
}
</style>
