<template>
  <div>
    <NavBarBasketCost/>
    <button v-on:click="checkout">Checkout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import CheckoutFlow from '@/components/CheckoutFlow.vue'

export default {
  name: 'checkoutflow',
  components: {
    CheckoutFlow
  },
  data: function() {
    return {}
  },
  methods: {
    completeCheckout: function (event) {

    }
  }
}
</script>

