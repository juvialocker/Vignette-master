import { TOKEN_KEY } from '../../config';

const state = {
    token: window.sessionStorage.getItem(TOKEN_KEY) || '',
};

const mutations = {
    setToken(state, { token }) {
        state.token = token;
    },
    rmToken(state) {
        state.token = '';
    // sessionStorage.removeItem("token");
    }
};

const actions = {
    setToken({ commit }, { token }) {
    // do something async
    commit('setToken', { token });
    window.sessionStorage.setItem(TOKEN_KEY, token);
    },
    rmToken({ commit }) {
    commit('rmToken');
    }
};

export default {
    state,
    mutations,
    actions
};