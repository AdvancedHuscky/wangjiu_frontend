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
  },
  destroyed() {
    localStorage.removeItem('id')
  }
}
</script>

<style scoped lang='scss'>

</style>
