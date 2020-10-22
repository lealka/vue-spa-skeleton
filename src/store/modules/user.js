import router from '@/router';

export default {
    namespaced: true,
    state: {
        user: null,
        isAuthenticated: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        }
    },
    actions: {
        userJoin({ commit }, { email, password }) {
            //TODO: For test
            commit('setUser', {
                user: email,
                password: password
            });
            commit('setIsAuthenticated', true);
            router.push('/');
        },
        userLogin({ commit }, { email, password }) {
            //TODO: For test
            commit('setUser', {
                user: email,
                password: password
            });
            commit('setIsAuthenticated', true);
            router.push('/');
        },
        userSignOut({ commit }) {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            router.push('/');
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    }
};
