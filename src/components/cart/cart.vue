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
    <div class="good">
       <div class="good_tit">
         <div class="mui-input-row mui-checkbox mui-left" >
           <label>
             <img src="http://m.wangjiu.com/htmlResource/images/o05.png" alt="">
             网酒网
           </label>
           <input name="checkbox1" value="Item 1" type="checkbox" checked>
         </div>
       </div>


     <ul>
       <li v-for="(value, key ) in goodInfo" :key="key">

         <!--选择-->
         <div class="choice">
             <div class="mui-input-row mui-checkbox mui-left car_che">
               <label></label>
               <input name="checkbox1" value="Item 1" type="checkbox" checked>
             </div>
         </div>
         <!--信息-->
         <div class="info">
           <img :src="'http://img1.wangjiu.com/' +value.url " alt="">
           <div class="aaa">
             <p>{{ value.name}}</p>
             <h3>
               <span style="color: #ca0915">{{ value.price |currency}}</span>
               <div class="mui-numbox" data-numbox-step='10' data-numbox-min='0' data-numbox-max='100'>
                 <button class="mui-btn mui-numbox-btn-minus" type="button" @click="jianClick(value.id)">-</button>
                 <input class="mui-numbox-input" type="number"  value="0" id="num" v-model="value.num"/>
                 <button class="mui-btn mui-numbox-btn-plus" type="button" @click="jiaClick(value.id)">+</button>
               </div>
             </h3>
           </div>
         </div>
       </li>
     </ul>
      <!--结算-->
      <div class="footer">
        <div class="mui-input-row mui-checkbox mui-left" >
          <label>全选</label>
          <input name="checkbox1" value="Item 1" type="checkbox" checked>
        </div>

        <div class="price">
          <p> 合计 <span>{{sum |currency}}</span></p>
          <h6>已优惠￥0.00</h6>
        </div>
        <button>结算</button>

      </div>
    </div>
  </div>
</template>

<script>
import { currency } from '../../util/currency';

export default {
  data() {
    return {
      flag: true,
      a: '编辑',
      sum: 0,
      sumPrice: '',
      goodInfo: ''
    }
  },
  methods: {
    func() {
      let sum = 0;
      const locationData = localStorage.getItem('cartInfo');
      const a = JSON.parse(locationData)
      console.log(a);
      for (const y in a) {
        if (y) {
          sum += a[y].num * a[y].price
        }
      }
      console.log(sum);
      return sum
    }
  },
  filters: {
    currency
  },
  // hhh
  created() {
    const locationData = localStorage.getItem('cartInfo');
    if (!locationData) { // nothing in cart
      this.flag = true;
    } else {
      this.flag = false;
      this.goodInfo = JSON.parse(locationData)
    }
  },
  mounted() {
    this.sum = this.func()
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
.good{
    clear: both;
    padding-top:1.5rem;;
  }
  .good_tit{
    background: #f8f8f8;
    line-height:0.8rem;
    margin-top:0.3rem;;
    /*padding: 0.3rem;*/
  }
  .mui-input-row input{
    top: 0.2rem;

  }
  .mui-radio.mui-left input[type='radio'], .mui-checkbox.mui-left input[type='checkbox']{
    left:0.28rem;
  }
  .mui-radio input[type='radio']:checked:before, .mui-checkbox input[type='checkbox']:checked:before{
    color:#cc0103;
  }
  label{
    font-size: 0.4375rem;
    padding-left:1.2rem;
  }
  .car_che{
    margin-top:0.8rem;;
  }
  label img{
    width: 0.7rem;
  }
  .good ul{
    background: #fff;
  }
  .good ul li{
    /*background: #fff;*/
    display: flex;
    justify-content: flex-start;
    padding: 0.3rem 0;
  }
  .choice{
    width: 15%;

    line-height:2.0rem;;
  }
  /*信息*/
  .info{
    display: flex;
    justify-content: flex-start;
    width: 85%;
    border-bottom:1px solid #ededed;
  }
  .info img{

    height: 2.5rem;
    border: 1px solid #ededed;
    border-radius: 6px;;
    float: left;
    margin:0.3rem 0;
  }
  li:last-child .info{
    border: none;
  }
  .info>div{
    width: 85%;
    padding-left:0.2rem;;
  }
  .info >div>p{
    width: 100%;
    font-size: 0.4375rem;;
  }
  .info >div>h3{
    width: 100%;
    display: flex;
    padding-top:1.3rem;;
    justify-content: space-between;
    position: relative;
  }
  .info >div>h3 span{
    font-size: 0.4375rem;;
  }
  .mui-numbox{
    position: absolute;
    right: 0.5rem;
    bottom: 0rem;

    height: 0.9rem;
    width:3.0rem;
    margin-left:1.0rem;;
    padding-left: 1rem;
  }
  .mui-numbox> button{
    width: 1.0rem;
  }

  .mui-table-view-cell:after{
    background: #fff;
  }

  .footer{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    position: fixed;
    bottom: 1.5rem;
    background: #fff;;
  }
  .price{
    margin-left:0.8rem;;
    width: 3.0rem;
  }
  .price p {
     /*width: 3.0rem;*/
   font-size: 0.4375rem;
  }
  .price p>span{
    color: #ca0915

  }
  .price h6{
    font-size: 0.375rem;
    width: 100%;
    text-align: right;
    margin: 0;
    color: #999
  }
  .footer button{
    margin-left:0.2rem;;
    color: #fff;
    background: #ca0915;
    padding-left:0.9rem;
    padding-right:0.9rem;;
  }
</style>
