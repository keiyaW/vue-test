import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

const mockyio = '/api/articles';

const state = {
  articles: [],
};

const mutations = {
    setArticles(state, value) {
        state.articles = value;
    }
};

const actions = {
    getArticles({ commit }) {
        Axios.get(mockyio).then(response => commit('setArticles', response));
    },
};

const getters =  {
    articleList(state) {
        return state.articles;
    },
    articleList(state, id) {
        return state.articles;
    }
};

let store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;
