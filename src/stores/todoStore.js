import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

var state = {
    todos: [
        {
            id: 1,
            title: "Get milk!",
            deadline: new Date(new Date().setDate(new Date().getDate() + 4))
        },
        {
            id: 2,
            title: "Fix mailbox!",
            deadline: new Date(new Date().setDate(new Date().getDate() - 2))
        },
        {
            id: 3,
            title: "Call Saul",
            deadline: new Date(new Date().setDate(new Date().getDate())),
            completed: true
        }
    ]
};

var getters = {
    getTodos: state => state.todos
};

var mutations = {
    ADD_TODO: (state, payload) => {

        var newTask = {
            id: Date.now().getTime(),
            title: payload.title,
            deadline: payload.deadline,
            completed: false
        }

        state.todos.unshift(newTask);
    },
    TOGGLE_TODO: (state, payload) => {
        var item = state.todos.find(todo => todo.id === payload);
        item.completed = !item.completed;
    },
    DELETE_TODO: (state, payload) => {
        var index = state.todos.findIndex(todo => todo.id === payload);
        state.todos.splice(index, 1);
    }
};

var actions = {
    addTodo: (context, payload) => {
        context.commit("ADD_TODO", payload)
    },
    toggleTodo: (context, payload) => {
        context.commit("TOGGLE_TODO", payload)
    },
    deleteTodo: (context, payload) => {
        context.commit("DELETE_TODO", payload)
    }
}

var store = new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
});

export default store;