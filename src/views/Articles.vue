<template>
  <div class="articles">
    <h1>ARTICLE PAGE</h1>
    <ul>
        <li class="arc" v-for="arc in articleList.data" :key="arc.id">
            <router-link :to="`/articles/${arc.id}`">
                <img alt="Vue logo" src="../assets/blank.png">
                {{arc.title}}
            </router-link>
        </li>
    </ul>
  </div>
</template>

<style lang="scss">
ul{
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.arc{
  padding: 0 10px;
  margin: 10px 0;
}
li a{
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
li a:active{
  color: #42b983;
}
.articles{
  width: 100%;
  display: flex;
  flex-direction: column;
  h1{
    text-align: center;
  }
}
</style>

<script>
// import Articles from '../data/data';
import { mapActions, mapGetters } from 'vuex';

export default {
  created() {
      this.getArticles();
  },
  computed: {
    ...mapGetters([
      'articleList',
    ]),
    // ArticleList() {
    //   return Articles;
    // },
  },
  methods: {
    ...mapActions([
      'getArticles',
    ]),
  },
};


</script>
