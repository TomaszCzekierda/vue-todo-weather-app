<template>
    <input class="input-atom" v-model="internalValue" />
</template>
<script>
export default {
  name: "InputAtom",
  props: {
    value: String
  },
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      }
    }
  }
};
</script>
<style scoped>
.input-atom {
  border: 2px solid gray;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
}
.input-atom.invalid {
  border-color: red;
}
</style>