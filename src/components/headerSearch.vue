<template>
<header>
  <div>
        <span @click="jump({a:1})" id="search-box">
          <i class="iconfont">&#xe620;</i> 搜索商品
        </span>
    </div>
</header>
</template>
<script>
export default{
  methods: {
    jump(p) {
      this.$router.push({ path: '/search/', query: { a: 0, b: p } });
    },
  },
};
</script>
<style scoped lang="scss">
header{
  width:100%;
  height: 1.4rem;
  position:fixed;
  top:0;
  background:#fff;
  div{
    width: 90%;
    height:1.0rem;
    margin:.2rem auto;
    border: 1px solid #d9d9d9;
    text-align: center;
    border-radius: .2rem;
    span{
      display:block;
      width:100%;
      height:100%;
      color:#d9d9d9;
      line-height:1rem;
      i{
        color:#d9d9d9;
      }
    }
  }
}
</style>
