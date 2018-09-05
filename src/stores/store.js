import Vue from "vue";
import Vuex from "vuex";

import todoStore from "./todoStore"
import weatherStore from "./weatherStore"

Vue.use(Vuex);

var store = new Vuex.Store({
    modules: {
        todoStore: todoStore,
        weatherStore: weatherStore
    }
});

export default store;