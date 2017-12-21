<template>
    <div class="ffshelf">
        <ffshelf-cover v-on:click="onCoverClick"></ffshelf-cover>
        <ffshelf-dialog v-on:choose="onChoose"
                        v-on:cancel="onCancel">
        </ffshelf-dialog>
    </div>
</template>

<script>
import cover from './components/ffshelf-cover.vue'
import dialog from './components/ffshelf-dialog.vue'

export default {
    components: {
        'ffshelf-dialog': dialog,
        'ffshelf-cover': cover
    },
    mounted: function() {
    },
    methods: {

        onCoverClick: function() {
            console.log("cover clicked!");
        },

        onChoose: function() {
            console.log("choose clicked!");
        },

        onCancel: function() {
            console.log("cancel clicked!");
        }
    }
}
</script>

<style lang="scss" module>
    @import url('https://fonts.googleapis.com/css?family=Titillium+Web');
    $dialog-width: 960px;
    $dialog-height: 600px;
    $dialog-background-color: #fff;
    $dialog-padding: 0px;

    .ffshelf {
        font-family: 'Titillium Web', sans-serif;
    }

    .ff-shelf {
        font-family: 'Titillium Web', sans-serif;
        .dialog-frame {

            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            position: fixed;

        }

        .dialog {

            width: $dialog-width;
            height: $dialog-height;
            background: $dialog-background-color;
            padding: $dialog-padding;
            border: none;
            margin: -1 * ($dialog-height/2) 0 0 -1*($dialog-width/2);
            top: 50%;
            left: 50%;
            position: fixed;
            box-sizing: border-box;
            border-radius: 3px;
            z-index: 999;
            overflow: hidden;


            .dialog-close {
                position: absolute;
                right: 0;
                top: 0;
                margin: 10px 15px;
                color: #aaa;

                i {
                    font-size: 12px;
                }

                &:hover {
                    color: #333;
                }

                z-index: 1004;

            }

        }

    }
</style>