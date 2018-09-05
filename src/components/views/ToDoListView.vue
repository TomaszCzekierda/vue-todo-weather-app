<template>
<div>
    <h1>TODOLISTVIEW</h1>
      <ul class="tasks">
            <li v-for="todo in todos"
                :key=todo.id
                :class="{completed: todo.completed}"
                class="task">{{todo.title}}</li>
        </ul>
    </div>
    
</template>
<script>
export default {
  name: "ToDoListView",
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>
<style scoped>
</style>