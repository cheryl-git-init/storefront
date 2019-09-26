<template>
  <div class="basket-item">
    <span>{{ getItemInDepth.name }}</span>
    <span>{{ getItemInDepth.currencySymbol }}{{ (getItemInDepth.currentUsdPrice / 100).toFixed(2) }}</span>
    <span class="small-text">
      <template
        v-if="getItemInDepth.discount > 0"
      >{{ `Inc. ${getItemInDepth.discount}% discount!` }}</template>
    </span>
    <button class="remove-button" @click="removeItemFromBasket">X</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "basketItem",
  components: {},
  computed: {
    getItemInDepth: function() {
      return this.$store.getters.getItemInDepth(this.id);
    }
  },
  props: {
    id: String
  },
  methods: {
    removeItemFromBasket: function() {
      this.$store.dispatch("removeItemFromBasket", this.id);
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

.basket-wrapper {
  width: 20em;
  max-width: 95%;
  position: fixed;
  right: 0px;
  top: 60px;
  z-index: 3;
  .basket-item {
    padding-left: 5px;
    background-color: bisque;
    height: 50px;
    position: relative;
    border-bottom: 1px solid black;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    span {
      margin: 15px 0px;
      display: inline-block;
    }
    .remove-button {
      height: 25px;
      top: 11px;
      position: relative;
      border-radius: 10px;
      width: 50%;
      margin: 0% 25%;
      background-color: $color4;
      color: $color2;
    }
  }
}
.small-text {
  color: $color1;
  font-size: 0.7em;
  padding: 0px;
}
</style>
