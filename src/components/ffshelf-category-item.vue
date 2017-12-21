<template>
    <div class="ffshelf-category-item" v-on:click="onClick">
        <i v-if="icon" :class="icon"></i>
        <slot></slot>
    </div>
</template>

<script>


    export default {
        props: ["icon"],
        methods: {
            onClick: function () {
                this.$emit('click');
            }
        }
    }
</script>

<style lang="scss" module>
    .ffshelf-category-item {
        width: 200px;
        float: left;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 3px;
        transition: background-color 0.5s;
        overflow: hidden;

        &:hover {
            background-color: #ECEFF1;
        }

        i {
            font-size: 14px;
            margin-right: 6px;
        }

    }
</style>