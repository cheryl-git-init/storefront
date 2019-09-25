<template>
    <div class="basket-wrapper">
        <div class="basket-empty-message" v-if="getBasketContents.length === 0">Nothing here. Why not get a bundle?</div>
        <div class="basket-item" v-for="item in getBasketContents" :key="item.name">
            
            <span>{{ item.name }}</span>
            <span>{{ item.usdPrice }}</span>

            <button class="remove-button" @click="removeItemFromBasket(item.id)">Remove Item</button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'basket',
  components: {
  },
  computed: {
    getBasketContents () {
        return this.$store.getters.getBasketContents
    },
  },
  props: {
  },
  methods: {
      removeItemFromBasket: function (item) {
          this.$store.dispatch('removeItemFromBasket',item)
      }
  }
}
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
        text-align: left;
        padding-left: 20px;
        background-color: bisque;
        height: 50px;
        position: relative;
        border-bottom: 1px solid black;
        span {
            margin: 15px;
            display: inline-block;
        }
        .remove-button {
            position: relative;
            float: right;
            top: 15px;
            
        }
    }
}
</style>
