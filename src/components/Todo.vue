<template>
  <div class="col-6 mb-2">
    <div
      class="d-flex justify-content-between align-items-center border rounded p-3"
      v-if="editMode === false"
    >
      <div>{{ todo.text }}</div>
      <div>
        <button type="button" class="btn btn-info btn-sm" @click="enableEdit">
          edit
        </button>
        <button
          type="button"
          class="btn btn-danger btn-sm ml-1"
          @click="$emit('delete-todo', todo.key)"
        >
          delete
        </button>
      </div>
    </div>
    <div
      class="d-flex justify-content-between align-items-center border rounded p-3"
      v-if="editMode === true"
    >
      <div><input type="text" v-model="todoText" /></div>
      <div>
        <button type="button" class="btn btn-info btn-sm" @click="editTodo">
          edit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>
