<template>
  <div>
    <NavBar/>
    <!-- <h2>{{ itemName }}</h2> -->
    
    <AddToBasket :id="id"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import AddToBasket from '@/components/AddToBasket.vue'

export default {
  name: 'ItemPage',
  components: {
    NavBar,
    AddToBasket
  },
  props: {
    id: String
  },
  computed: {

  },
  mounted: function() {
    console.log(this.$store.getters.itemList)
  }
}
</script>
