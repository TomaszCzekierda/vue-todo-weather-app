import Vue from "vue";
var state = {
    weather: [],
    fetchingStatus: false
}

var getters = {
    getWeather: state => state.weather,
    getFetchingStatus: state => state.fetchingStatus
}

var mutations = {
    FETCH_WEATHER_SUCCESS: (state, payload) => {
        state.weather = payload;
    },
    FETCH_DATA_STATUS: (state, payload) => {
        state.fetchingStatus = payload;
    }
}

var actions = {
    fetchWeather: (context) => {
        context.commit("FETCH_DATA_STATUS", true);
        fetch("http://localhost:8081/weather")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                context.commit("FETCH_WEATHER_SUCCESS", data);
                context.commit("FETCH_DATA_STATUS", false);
            }, function (err) {
                console.log(err);
            });
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