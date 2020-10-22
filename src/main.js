import Vue from 'vue';
import '@babel/polyfill';

import './registerServiceWorker';
import '@/config/';

import App from './App';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import i18n from '@/plugins/i18n';
import router from '@/router';

import '@/router/guards';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app');
