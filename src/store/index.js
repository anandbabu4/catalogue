// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

// endpoint url
const baseUrl = `https://www.adorebeauty.com.au/api/ecommerce`;

//to handle state
const state = {
    categories: [],
    products: [],
    currentpage: 1,
    catid: 79,
    spinner: true,
}

//to handle state
const getters = {
    categories: (state) => state.categories,
    products: (state) => state.products,
    catid: (state) => state.catid,
    currentpage: (state) => state.currentpage,
    spinner: (state) => state.spinner
}

//to handle actions
const actions = {
    getCategories({ commit }) {
        axios.get(baseUrl + '/catalog/categories')
            .then(response => {
                commit('SET_CATEGORIES', response.data)
            })
    },
    getProducts({ commit }) {
        commit('SET_SPINNER', true);
        axios.get(baseUrl + `/catalog/products?categories:in=${state.catid}&page=${state.currentpage}&limit=100`)
            .then(response => {
                commit('SET_PRODUCTS', response.data);
                commit('SET_SPINNER', false);
            })
    },
    getProductDetail({ commit }, id) {
        if (!id) return false;
        commit('SET_SPINNER', true);
        return axios.get(baseUrl + `/catalog/products?id=${id}`)
            .then(response => {
                commit('SET_PRODUCTDETAIL', response.data);
                commit('SET_SPINNER', false);
            })
    },
    getCatId({ commit }, id) {
        commit('SET_CATID', id)
    },
    getCurrentPage({ commit }, page) {
        commit('SET_CURRENTPAGE', page)
    },
    getSpinner({ commit }, status) {
        commit('SET_SPINNER', status)
    }
}

//to handle mutations
const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categories = categories.data
    },
    SET_PRODUCTS(state, products) {
        state.products = products
    },
    SET_PRODUCTDETAIL(state, product) {
        state.productdetail = product.data
    },
    SET_CATID(state, id) {
        state.catid = id
    },
    SET_CURRENTPAGE(state, page) {
        state.currentpage = page
    },
    SET_SPINNER(state, status) {
        state.spinner = status
    }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
