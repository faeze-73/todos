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
      @delete-todo="$emit('delete-todo', $event)"
      @edit-todo="$emit('edit-todo', $event)"
    ></todo>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  props: {
    todos : {
      type: Array,
      required: true
    }
  },
  emits: ["delete-todo", "edit-todo"],
  // inject : ['todos'],
  components: {
    Todo,
  },
};
</script>
