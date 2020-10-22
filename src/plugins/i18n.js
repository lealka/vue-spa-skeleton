import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/lang';

Vue.use(VueI18n);

let config = Vue.prototype.$config;

export default new VueI18n({
    locale: config.i18n.locale, // set locale
    fallbackLocale: config.i18n.fallbackLocale, // set fallback locale
    messages // set locale messages
});
