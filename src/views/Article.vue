<template>
  <div class="article">
    <h1>{{Article.title}}</h1>
    <div >
      <img alt="Vue logo" src="../assets/blank.png">
    </div>
    <h3>{{Article.content}}</h3>
    <h4>Author : {{Article.author}}</h4>
    <!-- <h5>Tags : 
      <span v-for="tag in Article.tags" :key="tag">{{tag}} </span>
    </h5> -->
    
  </div>
</template>

<style lang="scss" scoped>
.article {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

<script>
// import Articles from '../data/data';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'articleList',
    ]),
    Article() {
      return this.articleList.body.find(arc => arc.id === this.$route.params.id);
    },
  },
};

</script>
