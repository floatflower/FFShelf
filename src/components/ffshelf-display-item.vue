<template>
    <div class="ffshelf-display-item">
        <div class="item-content" v-bind:class="{ 'ffshelf-display-item__item-chosen': chosen }" v-on:click="onClick">
            <div class="item-thumbnail">
                <component :is="filetype" :url="url"></component>
            </div>
            <div class="item-filename">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import icon_document from './icons/icon_document.vue';
    import icon_els from './icons/icon_els.vue';
    import icon_ppt from './icons/icon_ppt.vue';
    import icon_pdf from './icons/icon_pdf.vue';
    import icon_file from './icons/icon_file.vue';
    import icon_thumbnail from './icons/icon_thumbnail.vue';

    export default {
        data: function() {
            return {
                chosen: false
            }
        },
        props: ['filetype', 'url'],
        mounted: function() {

        },
        components: {
            'pic': icon_thumbnail,
            'document': icon_document,
            'els': icon_els,
            'ppt': icon_ppt,
            'pdf': icon_pdf,
            'file': icon_file,
        },
        methods: {
            onClick: function() {
                this.chosen = !this.chosen;
                this.$emit('click');
            }
        }
    }
</script>

<style lang="scss" module>
    .ffshelf-display-item {

        padding: 5px;
        float: left;
        box-sizing: border-box;
        width: 20%;
        text-align: center;

        .item-chosen {
            background-color: #B0BEC5;
        }

        .item-content {

            transition: background-color 0.5s;
            cursor: pointer;

            .item-thumbnail {
                width: 80px;
                height: 80px;
                margin: 0 auto 10px auto;
                svg, img {
                    width: 100%;
                    max-height: 100%;
                    overflow: hidden;
                }
            }

            .item-filename {
                width: 100%;
                overflow: hidden;
            }

            width: 100%;
            border: 1px solid #ddd;
            padding: 10px;
            box-sizing: border-box;
            border-radius: 3px;
            white-space: nowrap;
        }

    }


</style>