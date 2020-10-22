import Vue from 'vue';
import axios from 'axios';

let config = Vue.prototype.$config;

export default axios.create({
    baseURL: config.api.baseUrl,
    headers: {
        Authorization: 'Bearer {token}'
    }
});
