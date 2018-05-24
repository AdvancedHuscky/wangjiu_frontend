<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <ul>
        <router-link class="home" to="Home" active-class="active1">
          <dl>
            <dt><i class="iconfont">&#xe61f;</i></dt>
            <dd>主页</dd>
          </dl>
        </router-link>
        <router-link class="market" to="Classify" active-class="active2">
          <dl>
            <dt><i class="iconfont">&#xe620;</i></dt>
            <dd>分类</dd>
          </dl>
        </router-link>
        <router-link class="cart" to="Cart" active-class="active3">
          <dl>
            <dt><i class="iconfont">&#xe68e;</i></dt>
            <dd>购物车</dd>
          </dl>
        </router-link>
        <router-link class="mine" to="Mine" active-class="active4">
          <dl>
            <dt><i class="iconfont">&#xe629;</i></dt>
            <dd>我的</dd>
          </dl>
        </router-link>
      </ul>

    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
