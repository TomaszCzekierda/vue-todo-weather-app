<template>
<div class="todo-list-view">
    <h1>TODOLISTVIEW</h1>
    <SectionAtom>
      <TodoItemOrganism 
        v-for="todo in todos"
        :key=todo.id 
        v-bind:label=todo.title
        v-bind:completed=todo.completed />
    </SectionAtom>
</div>
    
</template>
<script>
import SectionAtom from "../atoms/SectionAtom.vue";
import TodoItemOrganism from "../organisms/TodoItemOrganism.vue";
export default {
  name: "ToDoListView",
  computed: {
    todos() {
      return this.$store.getters["todoStore/getTodos"];
    }
  },
  components: {
    SectionAtom,
    TodoItemOrganism
  }
};
</script>
<style scoped>
.todo-list-view {
}
</style>