<template>
  <span>
    <span>{{itemDetails.name}}</span>
    <!-- <span v-if="itemIsInBasket">Already in your basket!</span> -->
  </span>
</template>

<script>
// @ is an alias to /src

export default {
  name: "StoreManagerBundleItem",
  components: {},
  data: function () {
    return {};
  },
  methods: {},
  mounted: function () {},
  props: {
    item: String
  },
  computed: {
    itemDetails: function () {
      return this.$store.getters.getItemInDepth(this.item);
    },
    itemIsInBasket: function () {
      return this.$store.getters.itemIsInBasket(this.item);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>