<template>
  <div class="evaluate">
  <div class="aa">
      <ul>
        <li><span>全部</span><span>({{count}})</span></li>
        <li><span>好评</span><span>({{count}})</span></li>
        <li><span>中评</span><span>(0)</span></li>
        <li><span>差评</span><span>(0)</span></li>
      </ul>
    <div class="item111">
        <div class="item" v-for="(x,key) in goodsInfo" :key="key">
          <div class="item_top">
              <img src="http://m.wangjiu.com/htmlResource/images/60-60.jpg" alt="">
              <span>{{x.NICKNAME}}</span>
              <em>{{x.create_at}}</em>
          </div>

          <div class="info">
            <h2>
              <img src="http://m.wangjiu.com/htmlResource/images/d05.png" alt="" v-for="(n,key) in x.score" :key="key">
            </h2>
            <p>{{x.content}}</p>
          </div>
        </div>
    </div>

      <!--评论内容-->
    <div class="contents">
      <div class="evaluate_name"></div>
    </div>
  </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'evaluate', // 对应class
  data() {
    return {
      id: '',
      price: '',
      count: '',
      goodsInfo: [],
    }
  },
  methods: {

  },
  computed: {

  },
  created() {
    const aaa = localStorage.getItem('id')
    // product id
    this.id = JSON.parse(aaa).id;
    // product price
    this.price = JSON.parse(aaa).price;
    Axios.get(`/detail?id=${this.id}`).then(({ data }) => {
      this.goodsInfo = data.result.list[0].comments.comments;
      this.count = data.result.list[0].comments.count;
    });
  },
}
</script>

<style scoped>
  .evaluate{
    background: #ededed;
  }
  .item111{
    background: #ededed;
  }
  .aa{
    height: 16.25rem;
    width: 100%;
    position: absolute;
    top: 1.5rem;
    z-index: 9;
    background: #ededed;
  }
  ul{
    width: 100%;
    height: 2.0rem;
    display: flex;
    background: #fff;;
    justify-content: space-around;
  }
  ul>li{
    font-size: 0.4375rem;
    padding-top:0.4rem;
    text-align: center;
  }
  ul>li span{
    display: block;
  }
  .item{
    background: #ffffff;
    margin-top:0.3rem;
  }
  .item_top{
    border-bottom:1px solid #ededed;
    padding:0.3rem;
    line-height:1.5rem;
    color: #7a7b7b;
    font-size: 0.375rem;
  }
  .item_top img{
    border-radius: 50%;
    width: 1.3rem;
    vertical-align: middle;
    /*padding-right:0.3rem;*/
  }
  .item_top span{
    padding-left:0.3rem;
  }
  .item_top em{
    font-style: normal;
    margin-left:2.5rem;
  }
  .info{
    padding: 0.2rem;
  }
  .info h2{
    line-height:1.0rem;
  }
  .info h2 img{
    width: 0.7rem;
  }
  .info p{
    color: #5a5654;
    font-size: 0.4375rem;
  }
</style>
