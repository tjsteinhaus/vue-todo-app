<template>
  <div class="home">
    <img src="../assets/logo.png">
    <TodoList></TodoList>
    <AddTodo></AddTodo>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/NewTodo';

export default {
  name: 'home',
  components: {
    TodoList,
    AddTodo
  }
}
</script>
