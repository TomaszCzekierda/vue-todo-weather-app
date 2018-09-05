import Vue from "vue";
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
    ],
    todoForm: {
        title: "",
        deadline: new Date().toLocaleDateString()
    }
};

var getters = {
    getTodoForm: state => state.todoForm,
    getTodos: state => state.todos.sort(function (a, b) {
        return a.deadline < b.deadline;
    }),
    notFinishedTodos: state => state.todos.filter(todo => !todo.completed).length,
    getFormValidation: (state) => {
        var validationResult = {
            title: {
                isValid: true
            },
            deadline: {
                isValid: true
            }
        };
        if (state.todoForm.title.toLocaleLowerCase().indexOf("php") !== -1) {
            validationResult.title.isValid = false;
            validationResult.title.message = "Don't touch php!";
        }
        if (
            new Date().getTime() - 1000 * 60 * 60 * 24 >
            new Date(state.todoForm.deadline).getTime()
        ) {
            validationResult.deadline.isValid = false;
            validationResult.deadline.message = "Can't plan for the past!";
        }
        return validationResult;
    }
};

var mutations = {
    ADD_TODO: (state, payload) => {
        var newTask = {
            id: Date.now(),
            title: state.todoForm.title,
            deadline: new Date(state.todoForm.deadline),
            completed: false
        }

        state.todos.unshift(newTask);
        state.todoForm.title = "";
        state.todoForm.deadline = new Date().toLocaleDateString();
    },
    TOGGLE_TODO: (state, payload) => {
        var item = state.todos.find(todo => todo.id === payload);
        item.completed = !item.completed;
        state.todos = [
            ...state.todos.filter(element => element.id !== payload),
            item
        ];
    },
    DELETE_TODO: (state, payload) => {
        var index = state.todos.findIndex(todo => todo.id === payload);
        state.todos.splice(index, 1);
    },
    SUBMIT_FORM_VALUE: (state, payload) => {
        state.todoForm[payload.field] = payload.value;
    }
};

var actions = {
    todoFormChanged: (context, payload) => {
        context.commit("SUBMIT_FORM_VALUE", payload)
    },
    addTodo: (context) => {
        context.commit("ADD_TODO")
    },
    toggleTodo: (context, payload) => {
        context.commit("TOGGLE_TODO", payload)
    },
    deleteTodo: (context, payload) => {
        context.commit("DELETE_TODO", payload)
    }
}

const store = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}

export default store; 