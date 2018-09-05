<template>
    <div class="list-item-atom">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "ListItemAtom"
};
</script>
<style scoped>
.list-item-atom {
  padding: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  background: white;
}
</style>