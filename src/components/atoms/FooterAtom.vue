<template>
    <div class="footer-atom">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'FooterAtom'
    }
</script>
<style scoped>
    div.footer-atom{
        background: black;
        color: white;
        display: flex;
        flex-direction: row;
    }
</style>