<template>
    <div class="ffshelf-cover" v-on:click="onClick"></div>
</template>

<script>
    export default {
        methods: {
            onClick: function () {
                this.$emit('click');
            }
        }
    }
</script>

<style lang="scss" module>
    .ffshelf-cover {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0,0,0,0.7);
        z-index: 999;
    }
</style>