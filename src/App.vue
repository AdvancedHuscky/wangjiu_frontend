<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <ul>
        <router-link class="home" to="Home" active-class="active">
          <dl>
            <dt><i class="iconfont">&#xe61f;</i></dt>
            <dd>主页</dd>
          </dl>
        </router-link>
        <router-link class="market" to="Classify" active-class="active">
          <dl>
            <dt><i class="iconfont">&#xe627;</i></dt>
            <dd>分类</dd>
          </dl>
        </router-link>
        <router-link class="cart" to="Cart" active-class="active">
          <dl>
            <dt><i class="iconfont">&#xe68e;</i></dt>
            <dd>购物车</dd>
          </dl>
        </router-link>
        <router-link class="mine" to="Mine" active-class="active">
          <dl>
            <dt><i class="iconfont">&#xe629;</i></dt>
            <dd>我的</dd>
          </dl>
        </router-link>
      </ul>
    </footer>
  </div>
</template>
<script>
export default{
  name: 'App',
};
</script>
<style lang="scss">
$activeColor: #cc0103;
#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/*Iconfont basic setting*/
@font-face {
    font-family: 'iconfont';  /* project id 679626 */
    src: url('//at.alicdn.com/t/font_679626_1d62p9kiy04wjyvi.eot');
    src: url('//at.alicdn.com/t/font_679626_1d62p9kiy04wjyvi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_679626_1d62p9kiy04wjyvi.woff') format('woff'),
    url('//at.alicdn.com/t/font_679626_1d62p9kiy04wjyvi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_679626_1d62p9kiy04wjyvi.svg#iconfont') format('svg');
  }
.iconfont{
    font-family:"iconfont" !important;
    font-size:.6rem;font-style:normal;
    color:#333;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
footer {
  width: 100%;
  height:1.5rem;
  background-color:#fff;
  display:flex;
  flex:1;
  font-size:.3rem;
  border-top:1px solid #f0f0f0;
  position: fixed;
  bottom:0;
  left: 0;
  z-index: 20;
  ul {
    width: 100%;
    a {
      float: left;
      display: block;
      width: 25%;
      text-align: center;
      dl {
        padding-top: .2rem;
        dt {
          height: .8rem;
          padding-top: .2rem;
        }
        dd{
          width: 100%;
          height: .7rem;
        }
      }
    }
    .active i,.active dd{
      color:$activeColor;
      font-weight: 600
    }
  }
}
</style>
