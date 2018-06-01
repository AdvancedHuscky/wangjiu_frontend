<template>
  <div class="shopDetail">
      <div class="pic">
        <p>
          <span :class="{active:1==flag}" @click="detailClick()">商品详情</span>
          <span :class="{active:1==flag1}" @click="saleClick()">售后保障</span>
        </p>
            <div class="shop_item" v-html="goodsInfo.detail" v-show="flag"></div>
            <div class="after_sale" v-html="goodsInfo.after_sale_service" v-show="flag1"></div>
      </div>
  </div>


</template>

<script>
import Axios from 'axios'

export default {
  name: 'shopDetail',
  data() {
    return {
      goodsInfo: '',
      flag: 1,
      flag1: 0,
    }
  },
  methods: {
    detailClick() {
      this.flag = 1;
      this.flag1 = 0;
    },
    saleClick() {
      this.flag1 = 1
      this.flag = 0
    }

  },
  created() {
    const aaa = localStorage.getItem('id')
    // 商品id
    this.id = JSON.parse(aaa).id;
    // 商品价格
    this.price = JSON.parse(aaa).price;

    Axios.get(`/detail?id=${this.id}`).then(({ data }) => {
      this.goodsInfo = data.result.list[0].list;
      console.log(this.goodsInfo)
    });
  },
}
</script>

<!--scoped 说明样式只能在当前组件中使用-->
<style scoped>
.shopDetail{
  width: 100%;
}
  .active{
    color:#ca0915;
  }
 .pic{
   height: 16.25rem;
   width: 100%;
   position: absolute;
   top: 1.5rem;
   z-index: 9;
   background: #ededed;
 }
  .pic p{
    position:fixed;
    line-height:1.5rem;
    background: #fff;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .pic p>span{
    text-align: center;
    font-size: 0.4375rem;;
    width: 50%;
  }
  .shop_item,.after_sale{
    width:100%;
    margin-top:1.6rem;
  }


</style>
