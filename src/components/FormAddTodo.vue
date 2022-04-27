<template>
  <div class="form-inline">
    <div class="form-group">
      <input type="text" class="form-control mx-sm-3" placeholder="i want to do ..." v-model="todoText" />
      <button class="btn btn-primary" ref="addButton">add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: ''
    }
  },
  methods: {}
}
</script>

<style>
</style>
