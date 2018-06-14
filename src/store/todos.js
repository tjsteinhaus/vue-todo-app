const state = {
    list: [
        
    ]
};

const getters = {
    getTodos: state => {
        return state.list;
    }
};

const mutations = {
    addTodo( state, newTodo ) {
        state.list.push( newTodo );
    },
    deleteTodo( state, deleteTodo ) {
        state.list.splice( deleteTodo, 1 );
    }
};

const actions = {
    addTodo( {commit}, todo ) {
        if( todo.length > 0 ) {
            commit( 'addTodo', todo );
        }
    },
    deleteTodo( {commit}, todo ) {
        //if( todo.length > -1 ) {
            commit( 'deleteTodo', todo );
        //}
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}