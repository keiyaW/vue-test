<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/articles">Articles</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  height: 500px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  width: 10%;
}
#nav {
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  a {
    font-size: 20px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    text-decoration: none;
    margin: 20px 10px;
    text-align: left;
  }
}
</style>
