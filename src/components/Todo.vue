<template>
    <div>
        {{ text }} <button @click="deleteTodo( index )">Delete</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: [ 'text', 'index' ],
    methods: {
        ...mapActions( 'Todos', {
            deleteTodo: 'deleteTodo'
        } )
    }
}
</script>