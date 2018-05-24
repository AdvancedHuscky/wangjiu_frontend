<template>
    <div class="classify">
      <header-search></header-search>
      <!-- content start -->
      <section>
        <!-- left side -->
        <div>
          <ul>
            <li>{{item.category_name}}</li>
          </ul>
        </div>
        <!-- right side -->
        <div>
          <h2>
            <a :href="listInfo.action_url">
              <img :src="@@@" alt="">
            </a>
          </h2>
          <div v-for="(x,key) in listInfo.child_categories" :key="key" class="goods_item">
            <p>{{x.category_name}}</p>
            <ul>
              <li v-for="(y,key) in x.child" :key="key">
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
import headerSearch from '../headerSearch';

export default {
  components: {
    headerSearch,
  }
}
</script>

<style scoped lang="scss">

</style>
