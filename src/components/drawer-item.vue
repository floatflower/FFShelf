<template>
    <li>
        <a v-on:click="onClick"><i v-bind:class="icon"></i>
            <slot></slot>
        </a>
    </li>
</template>

<script>
export default {
    props: ["item"],
    data: function() {
        return {
            icon: this.item.icon
        }
    },
    methods: {
        onClick: function() {
            this.$emit('click', this.item.name);
        }
    }
}
</script>

<style lang="scss" module>

</style>