<section>
        <!-- left side -->
        <div>
          <ul>
            <li v-for="(item,index) in goodsInfo" @click="listClick(index)" v-bind:class="{red:item.category_name==str}" :key="index">{{item.category_name}}</li>
          </ul>
        </div>
        <!-- right side -->
        <div>
          <h2>
            <a :href="listInfo.action_url">
              <img :src="'http://img1.wangjiu.com/' +listInfo.image_url" alt="">
            </a>
          </h2>
          <!-- content list -->
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
