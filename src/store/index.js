import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

export default new Vuex.Store({
    state: {
        users: [],
        cities: [],
        flights: [],
        airlines: [],
    },
    actions: {
        loadUsers({ commit }) {
            Vue.axios.get('ciudades').then(result => {
                commit('SAVE_USERS', result.data);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        },
        loadCities({ commit }) {
            Vue.axios.get('ciudades').then(result => {
                commit('SAVE_CITIES', result.data);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        },
        loadFlights({ commit }) {
            Vue.axios.get('vuelos').then(result => {
                commit('SAVE_FLIGHTS', result.data);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        },
        loadAirlines({ commit }) {
            Vue.axios.get('aerolineas').then(result => {
                commit('SAVE_AIRLINES', result.data);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        }
        
    },
    mutations: {
        SAVE_USERS(state, users) {
            state.users = users;
        },
        SAVE_CITIES(state, cities) {
            state.cities = cities;
        },
        SAVE_FLIGHTS(state, flights) {
            state.flights = flights;
        },
        SAVE_AIRLINES(state, airlines) {
            state.airlines = airlines;
        }
    }
})