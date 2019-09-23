<template>
    <div>
        <ul>
            <li v-for="item in getBasketContents" :key="item.name">{{ key }}</li>
        </ul>
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
  }
}
</script>

<style lang="scss" scoped>
div {
    background-color: azure;
    width: 90%;
    height: 90%;
    position: fixed;
    right: 0px;
    top: 101px;
}
</style>
