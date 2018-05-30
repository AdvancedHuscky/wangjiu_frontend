<template>
  <div class="detail">
    <header>
      <router-link to="/home" class="home"></router-link>
      <div>
        <router-link to="/detail/shop" active-class="detail_active">商品</router-link>
        <router-link to="/detail/shopDetail" active-class="detail_active1">详情</router-link>
        <router-link to="/detail/evaluate" active-class="detail_active2">评价</router-link>
        <!--<a href="javascript:;" :class="{detail_active2:1==flag2}" @click="jump()">评价</a>-->
      </div>
      <h2 class="point" @click="itemClick()">
        <span></span>
        <span></span>
        <span></span>
      </h2>
      <section v-show="flag">
        <router-link to="/Home">首页</router-link>
        <router-link to="/Classify">分类</router-link>
        <router-link to="/Cart">购物车</router-link>
        <router-link to="/Mine">我的</router-link>
      </section>
    </header>
    <router-view class="detail_view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      flag: false,
      flag2: 0,
      id: 0,
      itemId: '',
      price: ''
    }
  },
  methods: {
    itemClick() {
      this.flag = !this.flag;
    },
    // turn to evaluate page
    jump() {
      this.flag2 = 1
      this.$router.push({ path: '/detail.evaluate' })
    }
  },
  created() {
    this.itemId = this.$route.query.id
    this.price = this.$route.query.price
    const obj = {
      id: this.itemId,
      price: this.price
    }
    localStorage.setItem('id', JSON.stringify(obj))
    this.$router.push({ path: '/detail/shop' })
  },
  destroyed() {
    localStorage.removeItem('id')
  }
}
</script>

<style scoped lang='scss'>
$activeRed:#ca0915;
.detail{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ededed;
  z-index: 11;
  header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 1.6rem;
    background: #fff;
    padding-top: .2rem;
    border-bottom: 1px solid #ccc;
    z-index: 10;
    .home:before{
      position: absolute;
      top:.7rem;
      left: .7rem;
      display: block;
      content:"";
      height: .3rem;
      width: .3rem;
      border-bottom: 1px solid #5d5d5d;
      border-right: 1px solid #5d5d5d;
      transform: rotate(135deg);
    }
    div{
      display: flex;
      width: 70%;
      height: 1.2rem;
      padding-left: .4rem;
      padding-top: .1rem;
      margin: 0 auto;
      justify-content: center;
      align-items:center;
      a{
        width: 30%;
        font-size: .4rem;
      }
      .detail_active,.detail_active1,.detail_active2{
        color: $activeRed;
      }
    }
    .point{
      position:absolute;
      right: .3rem;
      top: .7rem;
      span{
        display:block;
        float:left;
        width: .1rem;
        height: .1rem;
        border-radius: 50%;
        margin-left: .2rem;
        background: #999
      }
    }
    section {
      position: absolute;
      top:1.6rem;
      right:.3rem;
      width: 3.5rem;
      padding-left: .3rem;
      border-radius: .2rem;
      background: #000;
      a{
        display:block;
        padding-left: .8rem;
        line-height: 1.1rem;
        color: #fff;
      }
      a:nth-child(1){
        background:url("../../../public/img/home.png") no-repeat  0 50%;
        background-size: 0.6rem auto;
      }
      a:nth-child(2){
        background:url("../../../public/img/market.png") no-repeat  0 50%;
        background-size: 0.6rem auto;
      }
      a:nth-child(3){
        background:url("../../../public/img/cart.png") no-repeat  0 50%;
        background-size: 0.6rem auto;
      }
      a:nth-child(4){
        background:url("../../../public/img/mine.png") no-repeat  0 50%;
        background-size: 0.6rem auto;
      }
    }
    section:before{
      content:'';
      position: absolute;
      top: -.1rem;
      right:.3rem;
      width: .3rem;
      height: .3rem;
      background: #000;
      transform: rotate(135deg)
    }
  }
  .detail_view{
    margin-top: 1.6rem;
  }
}
</style>
