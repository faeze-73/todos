<template>
  <custom-header></custom-header>
  <main>
    <section class="jumbotron">
      <div class="container d-flex flex-column align-items-center">
        <h1 class="jumbotron-heading">Welcome!</h1>
        <p class="lead text-muted">
          To get started, add some items to your list:
        </p>
        <form-add-todo @add-todo="addTodoapp"></form-add-todo>
      </div>
    </section>
    <div class="todoList">
      <div class="container">
        <todo-list :todos="todos" @delete-todo="deleteTodo" @edit-todo="editTodo"></todo-list>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";
import FormAddTodo from "./components/FormAddTodo.vue";
// import { computed } from 'vue';
import axios from 'axios';
export default {
  components: {
    TodoList,
    "custom-header": Header,
    FormAddTodo,
  },
  data() {
    return {
      todos: []
    };
  },
  created() {
  },
  // provide() {
  //   return {
  //     todos: computed(() => this.todos),
  //     deleteTodo: this.deleteTodo,
  //     editTodo: this.editTodo
  //   }
  // },
  methods: {
    addTodoapp(text) {
      let todo = {
        done: false,
        text
      }
      axios.post("https://todos-6e4d5-default-rtdb.europe-west1.firebasedatabase.app/todos.json", todo)
        .then(res => {
          this.todos.push({
            ...todo,
            key: res.data.name,
        })
      })
        .catch(err => console.log(err))
        
    },
    deleteTodo(key) {
      axios.delete(`https://todos-6e4d5-default-rtdb.europe-west1.firebasedatabase.app/todos/${key}.json`)
        .then(res => {
          this.todos = this.todos.filter(item => item.key !== key);
        })
        .catch(err => console.log(err))
    },
    editTodo({ key, text }) {
      axios.patch(`https://todos-6e4d5-default-rtdb.europe-west1.firebasedatabase.app/todos/${key}.json`, { text })
        .then(res => {
          this.todos = this.todos.map(item => {
            if (item.key == key) {
              return {
                ...item,
                text: text,
          };
        }
        return item;
      })
    })
        .catch(err => console.log(err))
    },
    getTodosData() {
      axios.get("https://todos-6e4d5-default-rtdb.europe-west1.firebasedatabase.app/todos.json")
        .then(({ data }) => {
          let todos = Object.entries(data).map(([key, val]) => {
            return {
              key,
              ...val
            }
        })
        this.todos = todos;
      })
      .catch(err => console.log(err))
    }
  },
};
</script>
