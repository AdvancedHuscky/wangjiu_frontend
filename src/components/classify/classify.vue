<template>
    <div class="classify">
      <header-search></header-search>
      <!-- content start -->
      <section>
        <!-- left side -->
        <div class="left_side">
          <ul>
            <li v-for="(item,index) in goodsInfo" @click="listClick(index)" v-bind:class="{red:item.category_name==str}" :key="index">{{item.category_name}}</li>
          </ul>
        </div>
        <!-- right side -->
        <div class="right_side">
          <h2>
            <a :href="listInfo.action_url">
              <img :src="'http://img1.wangjiu.com/' +listInfo.image_url" alt="">
            </a>
          </h2>
          <!-- content list -->
          <div v-for="(x,key) in listInfo.child_categories" :key="key" class="goods_item">
            <p>{{x.category_name}}</p>
            <ul>
              <li v-for="(y,key) in x.child_categories" :key="key">
                <a href="http://m.wangjiu.com/category/result-pc_level_id-1-tag_key-%2039_389_387_390_395_394.html">
                  <div class="pic_logo">
                    <img :src="'http://img1.wangjiu.com/' + y.image_url" alt="" v-if="y.image_url">
                  </div>
                  <p class="ellipsis">{{y.category_name}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
</template>

<script>
import axios from 'axios';
import headerSearch from '../headerSearch';

export default {
  name: 'classify',
  data() {
    return {
      str: '一键选酒',
      goodsInfo: [],
      listInfo: [], // main content info
      urlPath: 'goods'
    }
  },
  methods: {
    listClick(index) {
      this.listInfo = this.goodsInfo[index];
      this.str = this.goodsInfo[index].category_name
    }
  },
  mounted() {
    axios.get('/goods').then((response) => {
      const res = response.data;
      if (res.status === '0') {
        console.log(response);
        console.log('hahahaha')
        this.goodsInfo = res.result.list;
        [this.listInfo] = this.goodsInfo;
        console.log(this.listInfo)
      } else {
        console.log(res.msg);
      }
    })
  },
  components: {
    headerSearch,
  }
}
</script>

<style scoped lang="scss">
$activeRed:#ca0915;
$background:#efefef;
section{
  margin-top: 1.4rem;
  width: 100%;
  div.left_side{
    float:left;
    position:fixed;
    top:1.4rem;
    left:0;
    width:25%;
    height:19rem;
    ul{
      width:100%;
      height:19rem;
      background: #fff;
      li{
        height:1.8rem;
        width:100%;
        line-height:1.8rem;
        text-align: center;
        border-bottom:1px solid #d9d9d9;
        font-size:0.4rem;
      }
      .red{
        color:$activeRed;
        background:$background;
      }
    }
  }
  div.right_side{
    float: right;
    width: 72%;
    margin-bottom: 1.8rem;
    h2>a{
      width:100%;
      display: block;
      margin-top: .2rem;
      img{
        width: 100%;
      }
    }
  }
  .goods_item{
    p{
    font-size:.4rem;
    padding-top: .3rem;
    color:#666;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      background:#fff;
      padding-top: .5rem;
      padding-left: .2rem;
      li{
        width:30%;
        a{
          display:block;
          width:100%;
          .pic_logo{
            margin-left:.3rem;
            width:1.3rem;
            img{
              width:100%;
            }
          }
          p{
            width:100%;
            text-align:center;
            font-size:.4rem;
            padding:.3rem 0;
          }
        }
      }
      li:nth-child(1) p{
        color:$activeRed
      }
      li:nth-child(2) p{
        color:$activeRed
      }
      li:nth-child(3) p{
        color:$activeRed
      }
    }
  }

}
</style>
