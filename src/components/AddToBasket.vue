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
        this.$forceUpdate()
        return this.$store.getters.itemIsInBasket(this.id)
    },
  },
  props: {
      id:String
  },
  methods: {
      addItemToBasket: function () {
          this.$store.dispatch('addItemToBasket',this.id)
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
