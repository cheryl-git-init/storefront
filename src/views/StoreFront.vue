<template>
  <div>
    <NavBar/>
    <StoreManager/>
    <!-- <StoreManagerBundles/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import StoreManager from '@/components/StoreManager.vue'
import StoreManagerBundles from '@/components/StoreManagerBundles.vue'

export default {
  name: 'store',
  components: {
    NavBar,
    StoreManager,
    StoreManagerBundles
  },
  data: function() {
    return {}
  },
  methods: {
  },
  mounted: function() {
    this.$store.dispatch('getAllItems')
  }
}
</script>

<style lang="scss" scoped>
</style>