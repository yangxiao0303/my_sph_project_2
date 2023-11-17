 <template>
  <div class="outer">
    <!-- 首页商品分类全局组件(其他路由组件也使用) -->、
    <TypeNav />
    <!-- 首页子组件:轮播图区域 -->
    <List />
    <!-- 今日推荐 -->
    <Recommend />
    <!-- 首页热卖排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!-- 楼层组件 -->
    <Floor v-for="item in 2" :key="item" />
    <!-- 商标 -->
    <Brand />
  </div>
</template>
 
 <script>
//  import all the child components
import Rank from "./rank"
import Recommend from "./recommend"
import List from "./list"
import Like from "./like"
import Floor from "./floor"
import Brand from "./brand"
export default {
  name: "Home",
  // register child components
  components: {Rank,Recommend,List,Like,Floor,Brand},
};
</script>
 
 <style scoped>
</style>