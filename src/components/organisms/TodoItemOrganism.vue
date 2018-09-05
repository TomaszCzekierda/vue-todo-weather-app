<template>
    <div class="todo-item-organism">
        <ListItemAtom>
            <CheckboxMolecule v-bind:checked=completed />
            <div class="to-do-banner"></div>
            <div class="to-do-label">{{label}}</div>
            <div class="to-do-date">2018-01-20</div>
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
    completed: Boolean
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