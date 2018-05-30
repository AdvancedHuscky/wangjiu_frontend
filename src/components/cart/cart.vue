<template>
  <div class="cart">
    <header>
      <h3> 购物车
      </h3>
      <span >{{a}}</span>
    </header>


    <div class="car" v-show="flag">
      <img src="http://m.wangjiu.com/htmlResource/images/c03.png" alt="">
      <p> 您的购物车还是空的哦</p>

      <router-link to="/home">去逛逛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      a: '编辑',
      sum: 0,
      sumPrice: ''
    }
  },
}
</script>

<style scoped lang="scss">
.cart{
  header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 1.4rem;
    h3 {
      widows: 100%;
      text-align: center;
      line-height: 1.4rem;
      background: #fff;
      font-weight: 400;
    }
    span{
      position: absolute;
      top: .4rem;
      font-size: .4rem;
      right:.3rem;
    }
  }
  .car{
    position: absolute;
    top: 1.4rem;
    width: 100%;
    padding-bottom: 3rem;
    background: #ededed;
    text-align: center;
    z-index: 20;
    img{
      margin-top: 4rem;
      width: 2rem;
    }
    p{
      color:#999;
      font-size: .4rem;
      line-height: 1rem;
    }
    a{
      display:inline-block;
      padding:0 .5rem;
      height:1rem;
      line-height: 1rem;
      margin: 2rem auto;
      font-size: .4rem;
      border:.01rem solid #999;
    }
  }
}
</style>
