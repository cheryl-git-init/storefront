<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$font-stack: Helvetica, sans-serif;
$secondary-color: rgb(72, 105, 255);
$tertiary-color: rgb(200, 206, 255);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  height: 100px;
  background-color: $secondary-color;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  background-color: $tertiary-color;
  margin: 0px;
}
</style>
