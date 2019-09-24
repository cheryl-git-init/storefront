<template>
  <div>
    <NavBar />
    <div class="item">
      <h2>{{ itemDetails.name }}</h2>
      <img v-bind:src="getImgLink()" height="100px" />
      <p>{{ currencySymbol }}{{ (itemDetails.usdPrice/100).toFixed(2) }}</p>
      <AddToBasket :id="id" />
      <p>Cupcake ipsum dolor sit. Amet powder oat cake marshmallow I love chocolate cake. Toffee chupa chups danish cotton candy dessert jelly-o.</p>
      <p>Sesame snaps sweet dessert bear claw cotton candy marzipan cotton candy. Tart cheesecake cupcake jelly-o sweet roll gummi bears donut liquorice croissant. Ice cream I love donut candy cheesecake I love cheesecake. Sweet roll chupa chups brownie sesame snaps croissant. Pie I love I love donut chocolate bar.</p>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import AddToBasket from "@/components/AddToBasket.vue";

export default {
  name: "ItemPage",
  components: {
    NavBar,
    AddToBasket
  },
  props: {
    id: String
  },
  data: function () {
    return {
        currencySymbol: "$"
    }
  },
  computed: {
    itemDetails() {
      return this.$store.getters.getItemDetails(this.id);
    }
  },
  mounted: function() {
    this.$store.dispatch("getAllItems")
    
  },
  methods: {
    getImgLink() {
      return require("@/assets/" + this.id + "_t.png");
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  top: 100px;
  position: relative;
}
</style>