<template>
    <div class="header-atom">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'HeaderAtom',
        props: {
        }
    }
</script>
<style scoped>
    div.header-atom{
        background: black;
        color: white;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>