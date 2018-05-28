<template>
<div class="home">
  <header-search></header-search>
  <!-- carousel start -->
  <section class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for=" (x,key) in bannerArr" :key="key">
            <a v-bind:href="x.ad_source_url"> <img v-bind:src= "'http://img0.wangjiu.com/' + x.ad_source_imgpath"></a>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"></div>
      </div>
    </section>
    <!-- icon-list -->
    <div class="info1">
      <ul>
        <li v-for="(info,key) in iconListArr" :key="key">
          <a v-bind:href="info.ad_source_url">
            <img v-bind:src="'http://img0.wangjiu.com/' + info.ad_source_imgpath" alt="">
            <p>{{info.ad_source_title}}</p>
          </a>
        </li>
      </ul>
    </div>

    <!--flash sales-->
      <section class="hot">
      <a  v-for="(item,key) in flashSalesArr" v-bind:href="item.ad_source_url" :key="key">
        <img v-bind:src="'http://img0.wangjiu.com/'+ item.ad_source_imgpath" alt="">
      </a>
    </section>
    <!-- grand cru -->
    <section class="stage">
        <a v-bind:href="i.ad_source_url" v-for="(i,key) in grandCruArr" :key="key">
          <img v-bind:src="'http://img0.wangjiu.com/' +i.ad_source_imgpath " alt="">
        </a>
    </section>

    <!-- special shop -->
    <div class="shopInfo" v-for="(y,key) in specialArr" :key="key">
      <div class="top">
        <a v-bind:href="y['result']['activity'].ad_source_url">
          <img v-bind:src="'http://img0.wangjiu.com/'+ y['result']['activity'].ad_source_imgpath" alt="">
        </a>
        <!--三角-->
        <div class="trigon"></div>
      </div>
      <div class="shopInfo_banner">
        <div class="swiper-container2">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for=" (x,key) in y['result']['item']" :key="key">
                <a v-bind:href="x.ad_source_url">
                  <img class="imgs"   v-bind:src= "'http://img0.wangjiu.com/' + x.ad_source_imgpath">
                  <p class="ellipsis">{{x.ad_schedule_name}}</p>
                  <p class="price"> {{x.ad_source_description}}</p>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import headerSearch from '../headerSearch';

export default {
  data() {
    return {
      bannerArr: [],
      iconListArr: [],
      flashSalesArr: [],
      grandCruArr: [],
      specialArr: []
    }
  },
  mounted() {
    axios.get('/home/carousel').then((response) => {
      this.bannerArr = response.data.result.data;
    })
    axios.get('/home/iconList').then((response) => {
      this.iconListArr = response.data.result.data;
    })
    axios.get('/home/flashSalesList').then((response) => {
      this.flashSalesArr = response.data.result.data;
    })
    axios.get('/home/grandCruList').then((response) => {
      this.grandCruArr = response.data.result.data;
    })
    axios.get('/home/specials').then((response) => {
      console.log(response);
      this.specialArr = response.data.result.data;
    })
    function swiper2() {
      // eslint-disable-next-line
      let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        autoplay: 1000,
        pagination: '.swiper-pagination',
      })
    }
    function swiper1() {
      // eslint-disable-next-line
      let swiper = new Swiper('.swiper-container2', {
      // pagination: '.swiper-pagination',
        slidesPerView: 3.5,
      // paginationClickable: true,
        // spaceBetween: 30,
      // freeMode: false //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
      });
    }
    setTimeout(() => {
      swiper1()
      swiper2()
    }, 100)
  },
  components: {
    headerSearch,
  },
};
</script>
<style scoped lang="scss">
#search-box {
      width: 80%;
      height: .8rem;
      margin: .2rem auto;
      border-radius: .2rem;
      background-color: rgba(0,0,0,.2)  !important;
      span{
        color: #d9d9d9 !important;
        background-color: rgba(0,0,0,.1) !important;
  }
}
.home{
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  header{
    position: fixed;
    top: 0;
    z-index: 10;
    background: rgba(0,0,0,.2);
  }
  .banner{
    width: 100%;
    height: 5.6rem;
    .swiper-container{
      width: 100%;
      height: 100%;
      .swiper-slide{
        width: 100%;
        height:100%;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .info1 ul{
    display: flex;
    width:100%;
    padding: .3rem 0;
    background: #ffffff;
    margin-top:.3rem;
    // justify-content: center;
    li{
      text-align: center;
      width: 25%;
      a{
        display: block;
        height: 100%;
        text-align: center;
        img{
          width: 1.2rem;
          height: 1.2rem;
          //margin-left: .6rem;
        }
        p{
          font-size: .375rem;
          color:#666;
        }
      }
    }
  }
  .hot{
    width: 100%;
    margin-top:.3rem;
    a{
      display:block;
      width: 50%;
      float: left;
      img{
        width: 99%;
      }
    }
  }
  .stage{
    width: 100%;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
    a:nth-child(1){
      height:2.2rem;
      width: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    a{
      width: 30%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .shopInfo{
    .top{
      position: relative;
      padding-top:.3rem;
      width: 100%;
      height: 3.8rem;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
      .trigon{
        display: block;
        position: absolute;
        top:3.6rem;
        left: 50%;
        width:0;
        height:0;
        border-left: .32rem solid transparent;
        border-right: .32rem solid transparent;
        border-bottom: .32rem solid #fff;
        transform: translateX(-50%);
      }
    }
    .shopInfo_banner{
      padding-top:.3rem;
      background: #fff;
      .swiper-slide{
        margin-right: .16rem;
        .imgs{
          width: 100%;
          height:100%;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }
        .price{
          font-size: 0.375rem;
          color: #ca0915;
          background: #fff;
          text-align: center;
          padding-bottom:0.3rem;;
        }
        .ellipsis{
          padding-top:0.1rem;;
          font-size: 0.375rem;
          background: #fff;
          text-align: center;
        }
      }
      .swiper-slide:nth-child(1){
        margin-left: .3rem;
      }
    }
  }
}
</style>

