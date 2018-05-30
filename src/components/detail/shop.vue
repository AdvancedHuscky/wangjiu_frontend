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
    <div class="aricle">
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
                <button class="mui-btn mui-numbox-btn-minus" type="button" @click="jianClick()">-</button>
                <input class="mui-numbox-input" type="number"  value="0" id="num" v-model="num1"/>
                <button class="mui-btn mui-numbox-btn-plus" type="button" @click="jiaClick()">+</button>
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
          <dt><span></span></dt>
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
export default {

}
</script>

<style scoped>

</style>
