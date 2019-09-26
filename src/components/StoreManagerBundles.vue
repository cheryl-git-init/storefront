<template>
  <div class="bundle-wrapper" >
      <h2>Bundles</h2>
      <p>All bundles give 10% off the items when purchased together!</p>
      <div v-for="bundle in bundles" :key="bundle.name">
          <p class="bundle-name">{{ bundle.name }}:</p>
          <span v-for="(item, index) in bundle.items" :key="item">
              <StoreManagerBundleItem :item="item" /><span v-if="!(index == (bundle.items.length - 1))"> | </span>
          </span>
          <template ></template>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreManagerBundleItem from '@/components/StoreManagerBundleItem.vue'


export default {
  name: 'StoreManagerBundles',
  components: {
    StoreManagerBundleItem
  },
  data: function() {
    return {}
  },
  methods: {
  },
  mounted: function() {
  },
  computed: {
    bundles: function () {
      return (this.$store.getters.bundlesList)
    },
  }
}
</script>

<style lang="scss" scoped>
div .bundle-wrapper {
    top: 60px;
    position: relative;
    padding-bottom: 50px;
    display: block !important;
    .bundle-name {
      font-weight: bold;
    }
}
</style>