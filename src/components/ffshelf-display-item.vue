<template>
    <div class="ffshelf-display-item" v-bind:title="title">
        <div class="item-content"
             v-bind:class="{ 'ffshelf-display-item__item-chosen': selected }"
             v-on:click="onClick">
            <div class="item-thumbnail">
                <component :is="filetype" :thumbnail="thumbnail"></component>
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
                selected: false,
                filetype: '',
                thumbnail: '',
                title: ''
            }
        },
        props: ['file'],
        mounted: function() {
            this.filetype = "icon_"+this.file.filetype;
            if (this.file.thumbnail) {
                this.thumbnail = this.file.thumbnail;
            }
            if (this.file.title) {
                this.title = this.file.title;
            }
        },
        components: {
            'icon_pic': icon_thumbnail,
            'icon_document': icon_document,
            'icon_els': icon_els,
            'icon_ppt': icon_ppt,
            'icon_pdf': icon_pdf,
            'icon_file': icon_file,
        },
        methods: {
            onClick: function() {
                this.selected = !this.selected;
                if (this.selected) {
                    this.$emit('select', this.file);
                }
                else {
                    this.$emit('cancel', this.file);
                }
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