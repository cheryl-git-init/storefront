<template>
    <div>
        <button v-if="!itemIsInBasket" @click="addItemToBasket" class="add">Add To Basket</button>
        <button v-else @click="removeItem" class="remove">Remove</button>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'addtobasket',
  components: {
  },
  computed: {
    itemIsInBasket: function () {
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
$font-stack: Helvetica, sans-serif;
$color1: rgb(79, 16, 145, 1);
$color2: rgb(12, 10, 62, 1);
$color3: rgb(179, 63, 98, 1);
$color4: rgb(204, 219, 220, 1);
$color5: rgb(243, 198, 119, 1);
$coolwhite: rgb(243, 253, 253, 1);

button {
    border-radius: 10px;
    background-color: $color3;
    color: $coolwhite;
}
.remove {
    background-color: $color4;
    color: $color2
}
</style>
