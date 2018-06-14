import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

import Todos from './todos';

export default new Vuex.Store( {
    modules: {
        Todos
    }
} );