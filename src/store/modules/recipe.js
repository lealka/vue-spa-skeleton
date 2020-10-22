import api from '@/api';

export default {
    namespaced: true,
    state: {
        recipes: []
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async getRecipes({ state, commit }, plan) {
            try {
                let response = await api.recipes.getRecipes(plan);

                commit('setRecipes', response.data.hits);
            } catch (error) {
                commit('setRecipes', []);
            }
        }
    },
    getters: {}
};
