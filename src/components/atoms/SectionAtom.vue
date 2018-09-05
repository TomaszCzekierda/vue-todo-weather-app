<template>
    <div class="section-atom" :class="{'section-atom-lower ': lower}">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "SectionAtom",
  props: {
    lower: Boolean
  }
};
</script>
<style scoped>
.section-atom {
  padding: 10px 10px 10px 10px;
}
.section-atom.section-atom-lower {
  padding-top: 0;
}
</style>