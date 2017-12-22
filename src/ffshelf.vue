<template>
    <transition name="ffshelf__fade">
        <div class="ffshelf" v-if="show" >
            <ffshelf-cover v-if="show" v-on:click="onCoverClick"></ffshelf-cover>
            <ffshelf-dialog v-on:confirm="onConfirm"
                            v-on:cancel="onCancel"
                            v-bind:category-url="categoryUrl"
                            v-if="show"
                            ref="dialog">
            </ffshelf-dialog>
        </div>
    </transition>
</template>

<script>
import cover from './components/ffshelf-cover.vue'
import dialog from './components/ffshelf-dialog.vue'

export default {
    data: function() {
        return {
        }
    },
    props: ['categoryUrl', 'show'],
    components: {
        'ffshelf-dialog': dialog,
        'ffshelf-cover': cover
    },
    mounted: function() {

    },
    methods: {
        open: function() {
            this.show = true
        },
        close: function() {
            this.show = false;
        },

        onCoverClick: function() {
            this.show = false;
        },

        onConfirm: function() {
            var files = this.$refs["dialog"].getSelectedFile();
            this.$emit('confirm', files);
            this.show = false;
        },

        onCancel: function() {
            this.show = false;
        }
    }
}
</script>

<style lang="scss" module>

    @import "./stylesheets/ffshelf.scss";
    @import url('https://fonts.googleapis.com/css?family=Titillium+Web');
    $dialog-width: 960px;
    $dialog-height: 600px;
    $dialog-background-color: #fff;
    $dialog-padding: 0px;

    .ffshelf {
        font-family: 'Titillium Web', sans-serif;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        float: left;
    }
</style>