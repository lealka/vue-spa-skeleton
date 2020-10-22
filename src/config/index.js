import Vue from 'vue';
import development from '@/config/_development';
import production from '@/config/_production';

if (process.env.NODE_ENV === 'production') {
    Vue.prototype.$config = production;
} else {
    Vue.prototype.$config = development;
}
