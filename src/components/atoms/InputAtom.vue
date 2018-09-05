<template>
    <input class="input-atom" @input="onInput" />
</template>
<script>
export default {
  name: "InputAtom",
  methods: {
    onInput(e) {
      this.$emit("input", e);
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