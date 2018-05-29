<template>
  <div class="hacker-news-list">
  <div class="hacker-news-header">
    <a target="_blank" href="http://www.ycombinator.com/">
      <img src="https://news.ycombinator.com/y18.gif">
    </a>
    <span>Hacker News</span>
  </div>
  <div class="hacker-news-item" v-for="(item, key) in list" :key="key">
    <span class="num" v-text="key + 1"></span>
    <p>
      <a target="_blank" :href="item.url" v-text="item.title"></a>
    </p>
    <p>
      <small>
        <span v-text="item.points"></span>
        points by
        <a target="_blank" :href="'https://news.ycombinator.com/user?id=' + item.author"
           v-text="item.author"></a>
        |
        <a target="_blank" :href="'https://news.ycombinator.com/item?id=' + item.objectID"
           v-text="item.num_comments + ' comments'"></a>
      </small>
    </p>
  </div>
  <infinite-loading @infinite="infiniteHandler">
    <span slot="no-more">
      There is no more Hacker News :(
    </span>
  </infinite-loading>
</div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import axios from 'axios';

const api = '/home/goodsItem';

export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    infiniteHandler($state) {
      axios.get(api, {
        params: {
          page: this.list.length / 4 + 1,
        },
      }).then(({ data }) => {
        if (data.result.data.length) {
          this.list = this.list.concat(data.result.data);
          $state.loaded();
          if (this.list.length === 38) {
            $state.complete();
          }
        } else {
          $state.complete();
        }
      });
    },
  },
  components: {
    InfiniteLoading,
  },
};
</script>
