<template>
  <div>
    <NavBar />
    <div class="item">
      <h2>{{ getItemInDepth.name }}</h2>
      <img v-bind:src="getImgLink()" height="100px" />
      <p>{{ getItemInDepth.currencySymbol }}{{ (getItemInDepth.usdPrice/100).toFixed(2) }}</p>
      <AddToBasket :id="id" />
      <p>{{ getItemInDepth.description }}</p>
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
  computed: {
    getItemInDepth() {
      return this.$store.getters.getItemInDepth(this.id);
    }
  },
  mounted: function() {
    this.$store.dispatch("getAllItems");
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
  top: 70px;
  position: relative;
}
</style>