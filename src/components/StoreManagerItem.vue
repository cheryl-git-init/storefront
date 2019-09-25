<template>
  <div class="store-item">
    <Icon v-if="loader" />
    <template v-else>
      <router-link :to="link" class="wrapper-target">
        <img v-bind:src="getImgLink()" height="80px" />
      </router-link>
      <p>{{ name }}</p>
      <p>{{ currencySymbol }}{{ decimalPrice }}</p>
      <router-link :to="link" class="small-text">View item details</router-link>
      <AddToBasket :id="id" />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import Icon from "@/components/Icon.vue";
import AddToBasket from "@/components/AddToBasket.vue";

export default {
  name: "StoreManagerItem",
  props: {
    loader: Boolean,
    name: String,
    id: String,
    price: Number
  },
  components: {
    Icon,
    AddToBasket
  },
  data: function() {
    return {
      currencySymbol: "$",
      decimalPrice: "",
      link: ""
    };
  },
  methods: {
    getImgLink() {
      return require("@/assets/" + this.id + "_t.png");
    }
  },
  mounted: function() {
    this.link = "/item/" + this.id;
    this.decimalPrice = (this.price / 100).toFixed(2);
  }
};
</script>

<style lang="scss" scoped>
$font-stack: Helvetica, sans-serif;
$color1: rgb(79, 16, 145, 1);
$color2: rgb(12, 10, 62, 1);
$color3: rgb(179, 63, 98, 1);
$color4: rgb(204, 219, 220, 1);
$color5: rgb(243, 198, 119, 1);
$coolwhite: rgb(243, 253, 253, 1);

.store-item {
  border: 1px solid $color5;
  max-height: 250px;
  padding: 10px 5px;
}
p {
  line-height: 10px;
}
img {
  height: 80px;
}
.wrapper-target {
  grid-row-start: 1;
  grid-row-end: 3;
}
.small-text {
  color: $color1;
  font-size: 0.7em;
  padding: 5px;
}
.small-text:visited {
  color: $color3;
}
</style>
