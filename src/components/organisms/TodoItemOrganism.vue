<template>
    <div class="todo-item-organism" @click="toggleTodo(id)">
        <ListItemAtom>
            <CheckboxMolecule v-bind:checked=completed />
            <div class="to-do-banner" :class=bannerState></div>
            <div class="to-do-label">{{label}}</div>
            <div class="to-do-date">{{deadline.toLocaleDateString()}}</div>
        </ListItemAtom>
    </div>
</template>
<script>
import ListItemAtom from "../atoms/ListItemAtom.vue";
import CheckboxMolecule from "../molecules/CheckboxMolecule.vue";
export default {
  name: "TodoItemOrganism",
  components: {
    ListItemAtom,
    CheckboxMolecule
  },
  props: {
    label: String,
    completed: Boolean,
    id: Number,
    deadline: Date
  },
  computed: {
    bannerState: function() {
      if (this.completed) {
        return "banner-completed";
      }
      if (this.deadline.toDateString() == new Date().toDateString()) {
        return "banner-today";
      }
      if (this.deadline.getTime() < new Date().getTime()) {
        return "banner-late";
      }
    }
  },
  methods: {
    toggleTodo: function(id) {
      this.$store.dispatch("todoStore/toggleTodo", id);
    }
  }
};
</script>
<style scoped>
.todo-item-organism {
}
.todo-item-organism > .list-item-atom {
  display: flex;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
}
.todo-item-organism > .list-item-atom > .to-do-banner {
  background: gray;
  display: inline-block;
  height: 84px;
  width: 10px;
  position: absolute;
  top: 0px;
  left: 0px;
}

.todo-item-organism > .list-item-atom > .to-do-banner.banner-completed {
  background: green;
}

.todo-item-organism > .list-item-atom > .to-do-banner.banner-today {
  background: yellow;
}

.todo-item-organism > .list-item-atom > .to-do-banner.banner-late {
  background: red;
}

.todo-item-organism > .list-item-atom > .to-do-label {
  margin-left: 10px;
  line-height: 44px;
  display: inline-block;
  padding-left: 10px;
  flex: 1;
}
.todo-item-organism > .list-item-atom > .to-do-date {
  font-size: 10px;
  color: gray;
  line-height: 44px;
}
</style>