<template>
  <div class="basket-wrapper">
    <div
      class="basket-empty-message"
      v-if="getBasketContents.length === 0"
    >Nothing here. Why not get a bundle?</div>
    <BasketItem v-for="item in getBasketContents" :key="item.name" :id="item.id"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BasketItem from "@/components/BasketItem.vue";

export default {
  name: "basket",
  components: {
      BasketItem
  },
  computed: {
    getBasketContents: function () {
      return this.$store.getters.getBasketContents;
    },
  },
  props: {},
  methods: {}
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
  background-color: $color4;
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
  }
}
</style>
