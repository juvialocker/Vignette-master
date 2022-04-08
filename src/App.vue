<!--
 * @Author: juvia
 * @Date: 2022-04-07 10:47:04
 * @LastEditors: juvia
 * @LastEditTime: 2022-04-08 17:36:43
 * @FilePath: \Vignette-master\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by juvia, All Rights Reserved. 
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding:0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  // max-width: 1200px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #f2f2f2;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
