<template>
  <div class="shop">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for=" (x,key) in goodArr.photos" :key="key">
           <img v-bind:src= "'http://img1.wangjiu.com/' + x.source">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
    </div>
      <!--name price-->
    <div class="article">
      <p> <span>自营</span>      {{goodArr.product_name}}</p>
      <p>{{price |currency}}</p>
    </div>

    <!--product info, choose quantity-->
    <div class="direction">
      <ul class="mui-table-view">
          <li class="mui-table-view-cell">
                <router-link  to="/detail/message" class="mui-navigate-right">商品信息</router-link>
          </li>
      </ul>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">选择数量
            <div class="mui-numbox" data-numbox-step='10' data-numbox-min='0' data-numbox-max='100'>
                <button class="mui-btn mui-numbox-btn-minus" type="button" @click="countClick(-1)">-</button>
                <input class="mui-numbox-input" type="number"  value="0" id="num" v-model="num1"/>
                <button class="mui-btn mui-numbox-btn-plus" type="button" @click="countClick(1)">+</button>
            </div>
        </li>
      </ul>
    </div>

    <!--delivery address-->
    <div class="address">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a   class="mui-navigate-right"> 送货至 &nbsp; &nbsp; 北京市 北京市 西城区</a>
        </li>
          <p> <b>有货</b> 由 <b>网酒网</b> 发货，并提供售后服务</p>
      </ul>
    </div>

    <!--comments-->
    <div class="evaluate">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell">
            <p>商品评价({{count}})
              <router-link  to="/detail/evaluate" class="mui-navigate-right" style="float: right; margin-right:0.5rem;">查看全部</router-link>

            </p>
          </li>
        </ul>
    </div>
    <!--click to show product detail-->
    <h3>
       <router-link to="/detail/shopDetail"> 点击查看商品详情</router-link>
    </h3>

    <div class="footer">
      <a class="collect" active-class="active1">
        <dl>
          <dt><span></span></dt>
          <dd>收藏</dd>
        </dl>
      </a>
      <a class="service">
        <dl><dt><span></span></dt><dd>客服</dd></dl>
      </a>
      <router-link to="/Cart" class="cart">
        <dl>
          <dt><span></span><i class="cartNum" v-show="cartFlag">{{ cartNum }}</i></dt>
          <dd>购物车</dd>
        </dl>
      </router-link>
      <a class="add" @click="addCart()">
        加入购物车
      </a>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import { currency } from '../../util/currency';

export default {
  data() {
    return {
      id: '',
      goodArr: '',
      price: '',
      count: '',
      num1: 0,
      product_properties: [],
      cartFlag: true,
      cartNum: 0
    }
  },
  created() {
    const aaa = localStorage.getItem('id')
    this.id = JSON.parse(aaa).id;
    this.price = JSON.parse(aaa).price;
    console.log(this.id)
    const localData = localStorage.getItem('cartInfo');
    let dataObj;
    if (!localData) {
      dataObj = {};
    } else {
      dataObj = JSON.parse(localData);
      const tempData = dataObj[this.id];
      console.log(tempData);
      this.cartNum = tempData.num;
    }
    // hehe haha
    Axios.get(`/detail?id=${this.id}`).then(({ data }) => {
      this.goodArr = data.result.list[0].list
      console.log(111);
      console.log(this.goodArr);
    });
    function swiper2() {
      // eslint-disable-next-line
      const mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        autoplay: 1000,
        pagination: '.swiper-pagination',
      })
    }
    setTimeout(() => {
      swiper2()
    }, 100)
  },
  methods: {
    countClick(num) {
      this.num1 += num;
      this.num1 = this.num1 < 0 ? 0 : this.num1;
    },
    addCart() {
      const localData = localStorage.getItem('cartInfo');
      let dataObj;
      if (!localData) {
        dataObj = {};
      } else {
        dataObj = JSON.parse(localData);
      }
      const tempData = dataObj[this.id];
      if (!tempData) {
        const cartObj = {
          id: this.id,
          price: this.price,
          name: this.goodArr.product_name,
          url: this.goodArr.product_main_image,
          num: this.num1
        }
        dataObj[this.id] = cartObj
      } else {
        tempData.num += this.num1
        this.cartNum = tempData.num;
      }
      localStorage.setItem('cartInfo', JSON.stringify(dataObj))
    }
  },
  computed: {
  },
  filters: {
    currency
  }
}
</script>

<style scoped lang='scss'>
$basicRed:#ca0915;
.shop{
  padding-bottom:1.7rem;
  .swiper-container{
    width: 100%;
    height: 10rem;
    border-bottom: 1px solid #ededed;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .article{
    background:#fff;
    padding-bottom: .3rem;
    p:nth-child(1){
      padding-top: .2rem;
      font-size: .4rem;
      padding-left: .4rem;
      span{
        display: inline-block;
        width:.8rem;
        height:.5rem;
        line-height: .5rem;
        color: #fff;
        font-size: .35rem;
        text-align: center;
        border-radius: .1rem;
        background: $basicRed;
      }
    }
    p:nth-child(2){
      color: $basicRed;
      font-weight: 600;
      padding-top: .2rem;
      font-size: .6rem;
      padding-left: .4rem;
    }
  }
  .direction{
    margin-top: .3rem;
    position: relative;
    .mui-table-view{
      font-size: 0.4375rem;
    }
    .mui-numbox{
      position: absolute;
      right: 0.5rem;
      top: 0.2rem;
      height: 0.9rem;
      width:3.0rem;
      padding: 0 1.0rem;
    }
    .mui-numbox> button{
      width: 1.0rem;
    }
    .mui-table-view-cell:after{
      background: #fff;
    }
  }
  .address{
    .mui-table-view-cell:after{
      background: #fff;
    }
    p{
      padding-left:1.5rem;
      padding-bottom:0.3rem;
    }
    .mui-table-view-cell:after{
      background: #fff;
    }
  }

  h3 {
    text-align: center;
    height: 1.5rem;
    line-height: 1.5rem;
    position: relative;
  }
  h3 a{
    font-size: 0.375rem;;
    color: #999;
  }
  h3 a:after{
    content:""  ;
    display: block;
    width:2.2rem;
    height: 0.04rem;
    position: absolute;
    top: 50%;
    right:8%;
    background-color: #dfdfdf;
    margin-top:-0.04rem;
  }
   h3 a:before{
    content:""  ;
    display: block;
    width:2.2rem;
    height: 0.04rem;
    position: absolute;
    top: 50%;
    left:8%;
    background-color: #dfdfdf;
    margin-top:-0.04rem;
  }
  .footer{
    width: 100%;
    height: 1.5rem;
    background-color: #fff;
    display: flex;
    font-size: 0.277778rem;
    border-top: 1px solid #f0f0f0;
    position: fixed;
    bottom: 0;
    left: 0;
    a{
      display: block;
      width: 22%;
      text-align: center;
      border-right:1px solid #ededed;
      dl{
        dt{
          height:.8rem;
          padding-top: .2rem;
        }
        span{
          display: inline-block;
          width: 0.5rem;
          height: 0.5rem;
        }
        dd{
          width: 100%;
          font-size: 0.4rem;
          color: #999;
          height: 0.7rem;
        }
      }
    }
    a:nth-child(4){
      width: 34%;
      background: #ca0915;
      font-size: 0.50rem;
      padding-top:0.4rem;
      color: white;
    }
    .collect span {
      background: url(../../../public/img/collect.png) no-repeat;
      background-size: 0.5rem;
  }
  .service span {
    background: url(../../../public/img/service.png) no-repeat;
    background-size: 0.5rem;
  }
  .cart{
    position: relative;
    .cartNum{
      position: absolute;
      top:-.3rem;
      left:.2rem;
      height:.7rem;
      width:.7rem;
      background: $basicRed;
      border-radius: 50%;
      text-align: center;
      line-height: .7rem;
      color:#fff;
      font-weight: 900;
    }
    span {
      background: url(../../../public/img/cart.png) no-repeat;
      background-size: 0.5rem;
    }
  }
  }
}
</style>
