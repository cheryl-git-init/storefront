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
.basket-wrapper {
    background-color: rgb(202, 218, 218);
    width: 20em;
    max-width: 95%;
    position: fixed;
    right: 0px;
    top: 101px;
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
