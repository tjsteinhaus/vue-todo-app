<template>
    <div>
        <form @submit="addTodo()">
            <label>Todo Label</label> &nbsp;
            <input type="text" v-model="todo" />
            <button type="submit">Add Todo</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data () {
        return {
            todo: ''
        }
    },
    methods: {
        ...mapActions( 'Todos', {
            addTodoToState: 'addTodo'
        } ),
        addTodo() {
            this.addTodoToState( this.todo );
            this.todo = '';
        }
    }
}
</script>