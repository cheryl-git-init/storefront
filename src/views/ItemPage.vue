<template>
  <div>
    <NavBar/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'ItemPage',
  components: {
    NavBar
  },
  props: {
    id: String
  },
  computed: {
    itemIsInBasket () {
        return this.$store.getters.itemIsInBasket(this.itemID)
    },
  },
}
</script>
