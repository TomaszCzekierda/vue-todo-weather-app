<template>
    <div class="checkbox-molecule">
        <Check v-show=checked />
    </div>
</template>
<script>
import Check from "../../assets/icons/check-solid.svg";
export default {
  name: "CheckboxMolecule",
  props: {
    checked: Boolean
  },
  components: {
    Check
  }
};
</script>
<style scoped>
.checkbox-molecule {
  border: 2px solid gray;
  width: 30px;
  height: 30px;
  display: inline-block;
  padding: 5px;
}
.checkbox-molecule > svg {
  color: gray;
}
</style>