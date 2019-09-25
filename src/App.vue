<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$font-stack: Helvetica, sans-serif;
$color1: rgb(79, 16, 145, 1);
$color2: rgb(12, 10, 62, 1);
$color3: rgb(179, 63, 98, 1);
$color4: rgb(204, 219, 220, 1);
$color5: rgb(243, 198, 119, 1);
$coolwhite: rgb(243, 253, 253, 1);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color2;
}
#nav {
  height: 60px;
  background-color: $color1;
  a {
    font-weight: bold;
    color: $color3;
    &.router-link-exact-active {
      color: $coolwhite;
    }
  }
}
body {
  background-color: $coolwhite;
  margin: 0px;
}
</style>
