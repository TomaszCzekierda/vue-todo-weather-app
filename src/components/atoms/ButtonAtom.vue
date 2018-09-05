<template>
    <button class="button-atom" @click="onClick">{{label}}</button>
</template>
<script>
export default {
  name: "ButtonAtom",
  props: {
    label: String
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style scoped>
.button-atom {
  border: gray;
  background: gray;
  color: white;
  line-height: 40px;
  font-weight: bold;
  display: block;
  width: 100%;
}
.button-atom:hover:not(:disabled) {
  background: lightgray;
}
.button-atom:disabled {
  opacity: 0.5;
}
</style>