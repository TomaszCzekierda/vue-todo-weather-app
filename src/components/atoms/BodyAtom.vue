<template>
    <div class="body-atom">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "BodyAtom"
};
</script>
<style scoped>
.body-atom {
  background: ghostwhite;
  flex-grow: 1;
  overflow: scroll;
  height: 100px;
}
</style>