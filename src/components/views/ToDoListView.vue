<template>
<div class="todo-list-view">
    <SectionAtom>
      <InputAtom 
      type="text" 
      placeholder="Type your todo"
      v-model="title"
      :class="{invalid: !validation.title.isValid}"/>
    </SectionAtom>
    <SectionAtom lower>
      <div class="todo-list-date-submission-wrapper">
          <InputAtom 
          type="date" 
          name="deadline" 
          v-model="deadline"
          :class="{invalid: !validation.deadline.isValid}"/>
          <ButtonAtom label="Add" :disabled=!isFormValid @click=createTodo />
      </div>
    </SectionAtom>
    <SectionAtom lower v-show=!isFormValid>
      <p class="validation-msg" v-for="(msg, index) in validationMessages" :key=index >
        {{msg}}
      </p>
    </SectionAtom>
    <SectionAtom lower>
      <TodoItemOrganism 
        v-for="todo in todos"
        :key=todo.id 
        v-bind:label=todo.title
        v-bind:deadline=todo.deadline
        v-bind:id=todo.id
        v-bind:completed=todo.completed />
    </SectionAtom>
</div>
    
</template>
<script>
import { mapState, mapGetters } from "vuex";
import ButtonAtom from "../atoms/ButtonAtom.vue";
import InputAtom from "../atoms/InputAtom.vue";
import SectionAtom from "../atoms/SectionAtom.vue";
import TodoItemOrganism from "../organisms/TodoItemOrganism.vue";
export default {
  name: "ToDoListView",
  computed: {
    ...mapGetters("todoStore", {
      todos: "getTodos",
      todoForm: "getTodoForm",
      validation: "getFormValidation"
    }),
    title: {
      get() {
        return this.todoForm.title;
      },
      set(value) {
        this.updateTodoFormValue("title", value);
      }
    },
    deadline: {
      get() {
        return this.todoForm.deadline;
      },
      set(value) {
        this.updateTodoFormValue("deadline", value);
      }
    },
    isFormValid: function() {
      return (
        Object.values(this.validation)
          .map(function(item) {
            return item.isValid;
          })
          .filter(value => value === false).length === 0
      );
    },
    validationMessages: function() {
      return Object.values(this.validation)
        .map(function(item) {
          return item.message;
        })
        .filter(value => value);
    }
  },
  components: {
    InputAtom,
    SectionAtom,
    TodoItemOrganism,
    ButtonAtom
  },
  methods: {
    updateTodoFormValue(target, value) {
      this.$store.dispatch("todoStore/todoFormChanged", {
        field: target,
        value: value
      });
    },
    createTodo() {
      this.$store.dispatch("todoStore/addTodo");
    }
  }
};
</script>
<style scoped>
.todo-list-view {
}
.todo-list-view .todo-list-date-submission-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.todo-list-view .todo-list-date-submission-wrapper > * {
  margin: 0 5px;
}
.todo-list-view .todo-list-date-submission-wrapper > *:first-child {
  margin-left: 0;
}
.todo-list-view .todo-list-date-submission-wrapper > *:last-child {
  margin-right: 0;
}
.todo-list-view .validation-msg {
  color: red;
  font-size: 12px;
  text-align: center;
}
</style>