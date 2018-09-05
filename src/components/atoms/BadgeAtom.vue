<template>
    <span class="badge-atom">
        {{label}}
    </span>
</template>
<script>
export default {
  name: "BadgeAtom",
  props: {
    label: Number
  }
};
</script>
<style scoped>
span.badge-atom {
  background: red;
  display: inline-block;
  border: 2px solid white;
  width: 10px;
  height: 10px;
  font-size: 8px;
  line-height: 12px;
  border-radius: 20px;
  text-align: center;
}
</style>