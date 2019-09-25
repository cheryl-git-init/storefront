<template>
  <div>
    <NavBar/>
    <StoreManager/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import StoreManager from '@/components/StoreManager.vue'

export default {
  name: 'store',
  components: {
    NavBar,
    StoreManager
  },
  data: function() {
    return {}
  },
  methods: {
  },
  mounted: function() {
    this.$store.dispatch('getAllItems')
  },
  computed: {
    doItemsExist () {
      return (this.$store.getters.itemList).length > 0
    }
  }
}
</script>

<style lang="scss" scoped>
</style>