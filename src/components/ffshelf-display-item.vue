<template>
    <div class="ffshelf-display-item" v-bind:title="title">
        <div class="item-content"
             v-bind:class="{ 'ffshelf-display-item__item-chosen': selected }"
             v-on:click="onClick">
            <thumbnail :src="file.thumbnail" v-bind:type="file.filetype"></thumbnail>
            <div class="item-filename">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import thumbnail from './ffshelf-display-item-thumbnail.vue';

    export default {
        data: function() {
            return {
                selected: false,
                filetype: '',
                thumbnailSrc: '',
                title: ''
            }
        },
        props: ['file'],
        mounted: function() {

        },
        updated: function() {
            this.selected = this.file.selected;
        },
        components: {
            'thumbnail': thumbnail
        },
        methods: {
            onClick: function() {
                this.file.selected = !this.file.selected;
                this.selected = this.file.selected;
                // console.log(this.file.selected);
                if (this.file.selected) {
                    this.file.selected = true;
                    this.$emit('select', this.file);
                }
                else {
                    this.file.selected = false;
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

            .item-filename {
                width: 100%;
                overflow-x: hidden;
                padding: 5px 0;
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