<template>
    <div>
        <h1>Todo List</h1>
        <ul>
            <Todo v-for="( todo, index ) in todos" :text="todo" :index="index" v-if="todos.length > 0"></Todo>
        </ul>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';
import Todo from './Todo';

export default {
    components: {
        Todo
    },
    computed: {
        ...mapGetters( 'Todos', {
            todos: 'getTodos'
         } )
    }
}
</script>