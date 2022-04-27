<template>
  <custom-header></custom-header>
  <main>
    <section class="jumbotron">
      <div class="container d-flex flex-column align-items-center">
        <h1 class="jumbotron-heading">Welcome!</h1>
        <p class="lead text-muted">
          To get started, add some items to your list:
        </p>
        <form-add-todo></form-add-todo>
      </div>
    </section>
    <div class="todoList">
      <div class="container">
        <todo-list :todos="todos"></todo-list>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";
import FormAddTodo from "./components/FormAddTodo.vue";
export default {
  components: {
    TodoList,
    "custom-header": Header,
    FormAddTodo,
  },
  data() {
    return {
      todos: [
        {
          key: 1,
          done: true,
          text: 'do your homework'
        },
        {
          key: 2,
          done: false,
          text: 'go to gym'
        }
      ]
    };
  },
  methods: {},
};
</script>
