<template>
  <div class="d-flex flex-column align-items-center">
    <nav class="col-6 mb-3">
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-item nav-link active font-weight-bold" id="nav-home-tab"
          >undone<span class="badge"></span
        ></a>

        <a
          class="nav-item nav-link active font-weight-bold"
          id="nav-profile-tab"
          >done<span class="badge badge-success"></span
        ></a>
      </div>
    </nav>
    <todo
      v-for="(item, index) in todos"
      :todo="item"
      :key="index"
      @delete-todo="deleteTodo"
      @edit-todo="editTodo"
    ></todo>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  emits: ["delete-todo", "edit-todo"],
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  components: {
    Todo,
  },
  methods: {
    deleteTodo($event) {
      this.$emit("delete-todo", $event);
    },
    editTodo($event) {
      this.$emit("edit-todo", $event);
    },
  },
};
</script>
