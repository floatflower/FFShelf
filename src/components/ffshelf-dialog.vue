<template>
    <div class="ffshelf-dialog">

    </div>
</template>

<script>
    export default {
        data: function() {
            return {
            }
        }
    }
</script>

<style lang="scss" module>

    $dialog-width: 960px;
    $dialog-height: 640px;
    $dialog-background-color: #fff;

    .ffshelf-dialog {
        top: 50%;
        left: 50%;
        position: fixed;
        z-index: 1000;
        width: $dialog-width;
        height: $dialog-height;
        background-color: #fff;
        margin: (-1*($dialog-height/2)) 0 0 (-1*($dialog-width/2));
    }
</style>