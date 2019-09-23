<template>
    <div class="store">
        <div v-if="loading">
            <StoreManagerItem loader/>
            <StoreManagerItem loader/>
            <StoreManagerItem loader/>
        </div>
        <div v-else>
            <StoreManagerItem v-for="item in allItems" :key="item.id" v-bind:name="item.name" v-bind:id="item.id" v-bind:price="item.usdPrice"/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import StoreManagerItem from '@/components/StoreManagerItem.vue'

export default {
  name: 'StoreManager',
  components: {
      StoreManagerItem
  },
  computed: {
    allItems () {
        return this.$store.getters.itemList
    },
    loading () {
        return this.$store.getters.loadingInProgress
    }
  }
}
</script>

<style lang="scss" scoped>
img {
    right: 0;
    top: 0;
    margin: 10px;
    position: absolute;
    object-fit: cover
}
.store {
    div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-align: center
    }
    /*  GO FULL WIDTH BELOW 480 PIXELS */
    @media only screen and (max-width: 880px) and (min-width: 481px) {
        div {
            display: grid;
            grid-template-columns: repeat(2, 1fr)
            
        }
    }
    /*  GO FULL WIDTH BELOW 480 PIXELS */
    @media only screen and (max-width: 480px) {
        div {
            display: grid;
            grid-template-columns: repeat(1, 1fr)
        }
    }
}
</style>
