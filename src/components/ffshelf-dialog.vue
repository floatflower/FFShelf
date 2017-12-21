<template>
    <div class="ffshelf-dialog">
        <category></category>
        <display></display>
        <div class="ffshelf-toggle">
            <button class="chosen" v-on:click="onChoose">選擇</button>
            <button class="cancel" v-on:click="onCancel">取消</button>
        </div>
    </div>
</template>

<script>

    import category from './ffshelf-category.vue';
    import display from './ffshelf-display.vue'

    export default {
        data: function() {
            return {
            }
        },
        components: {
            'category': category,
            'display': display
        },
        methods: {
            onChoose: function() {
                this.$emit('choose');
            },
            onCancel: function() {
                this.$emit('cancel');
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

        .ffshelf-toggle {
            bottom: 0;
            left: 0;
            width: $dialog-width;
            position: absolute;
            padding: 10px;
            box-sizing: border-box;
            border-top: 1px solid darken($dialog-background-color, 10%);


            button.chosen, button.cancel {
                float: right;
                padding: 0 20px;
                height: 36px;
                border-radius: 3px;
                font-size: 14px;
                transition: background-color 1s;
            }

            button.chosen {
                background-color: #BBDEFB;
                border: 1px solid darken(#BBDEFB, 20%);

                &:hover {
                    background-color: darken(#BBDEFB, 20%);
                }

            }

            button.cancel {
                background-color: #ECEFF1;
                margin: 0 10px;
                border: 1px solid darken(#ECEFF1, 20%);

                &:hover {
                    background-color: darken(#ECEFF1, 20%);
                }

            }

        }

    }
</style>