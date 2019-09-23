<template>
    <div>
        <button v-if="!itemIsInBasket" @click="addItemToBasket">Add To Basket</button>
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
        return this.$store.getters.itemIsInBasket(this.itemID)
    },
  },
  props: {
      itemID: String
  },
  methods: {
      addItemToBasket: function () {
          this.$store.dispatch('addItemToBasket',this.itemID)
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
