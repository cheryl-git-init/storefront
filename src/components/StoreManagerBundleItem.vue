<template>
  <span>
    <span>{{itemDetails.name}}</span>
    <span v-if="itemIsInBasket">Already in your basket!</span>
  </span>
</template>

<script>
// @ is an alias to /src

export default {
  name: "StoreManagerBundleItem",
  components: {},
  data: function() {
    return {};
  },
  methods: {},
  mounted: function() {},
  props: {
    item: String
  },
  computed: {
    bundles() {
      return this.$store.getters.bundlesList;
    },
    itemDetails() {
      console.log(this.item);
      return this.$store.getters.getItemInDepth(this.item);
    },
    itemIsInBasket() {
      console.log(this.$store.getters.itemIsInBasket(this.item));
      return this.$store.getters.itemIsInBasket(this.item);
    }
  }
};
</script>

<style lang="scss" scoped>
.bundle-wrapper {
  top: 60px;
  position: relative;
}
</style>