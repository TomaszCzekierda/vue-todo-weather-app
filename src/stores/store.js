import Vue from 'vue';
import Vuex from 'vuex';

import todoStore from './todoStore'

Vue.use(Vuex);

var store = new Vuex.Store({
    modules: {
        todoStore: todoStore
    }
});

export default store;