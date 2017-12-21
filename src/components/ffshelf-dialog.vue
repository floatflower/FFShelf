<template>
    <div class="dialog">
        {{test}}
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                test: "Hello"
            }
        }
    }
</script>

<style lang="scss" module>
    .dialog {
        width: 100px;
    }
</style>