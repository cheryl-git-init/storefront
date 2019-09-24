<template>
    <div>
        <button v-if="!itemIsInBasket" @click="addItemToBasket">Add To Basket</button>
        <button v-else @click="removeItem">Remove</button>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'addtobasket',
  components: {
  },
  computed: {
    itemIsInBasket () {
        return this.$store.getters.itemIsInBasket(this.id)
    },
  },
  props: {
      id:String
  },
  methods: {
      addItemToBasket: function () {
          this.$store.dispatch('addItemToBasket',this.id)
      },
      removeItem: function () {
          this.$store.dispatch('removeItemFromBasket',this.id)
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
