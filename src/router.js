import Vue from 'vue'
import Router from 'vue-router'
import ToDoListView from './components/views/ToDoListView.vue'
import WeatherView from './components/views/WeatherView.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'todo',
            component: ToDoListView
        },
        {
            path: '/weather',
            name: 'weather',
            component: WeatherView
        }
    ]
})