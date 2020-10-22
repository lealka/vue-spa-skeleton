import axios from '@/api/axios';
import Vue from 'vue';

let config = Vue.prototype.$config;

export default {
    getRecipes(plan) {
        return axios.get('search', {
            params: {
                q: plan,
                app_id: config.api.apiId,
                app_key: config.api.apiKey,
                from: 0,
                to: 9
            }
        });
    }
};
