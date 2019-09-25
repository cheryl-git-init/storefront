<template>
  <div>
    <div class="basket-display" v-on:click="toggleBasket">
      <span>{{ currentBasketCost }}</span>
      <i class="fas fa-shopping-basket fa-2x" :class="{'active': basketIsDisplayed}"></i>
    </div>
    <Basket v-if="basketIsDisplayed" />
    <div v-if="basketIsDisplayed" class="basket-overlay" @click="toggleBasket"></div>
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
$font-stack: Helvetica, sans-serif;
$color1: rgb(79, 16, 145, 1);
$color2: rgb(12, 10, 62, 1);
$color3: rgb(179, 63, 98, 1);
$color4: rgb(204, 219, 220, 1);
$color5: rgb(243, 198, 119, 1);
$coolwhite: rgb(243, 253, 253, 1);

img {
  right: 0;
  top: 0;
  margin: 10px;
  position: absolute;
}
.basket-display {
  right: 0;
  top: 0;
  margin: 10px 10px;
  position: absolute;
  cursor: pointer;
  z-index: 3;
  i {
    background-color: $color4;
    border-radius: 20%;
    padding: 5px;
  }
  .active {
    color: $color4;
    background-color: $color2;
  }
  span {
    color: $color4;
    margin: 5px
  }
}
.basket-overlay {
  height: 100%;
  width: 100%;
  background-color: $color2;
  z-index: 2;
  position: fixed;
  opacity: 0.6;
}
</style>
