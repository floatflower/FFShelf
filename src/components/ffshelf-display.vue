<template>
    <div class="ffshelf-display">
        <div class="item-container">
            <item v-for="file in files"
                  v-bind:file="file"
                  v-on:select="onSelect"
                  v-on:cancel="onCancel">
                {{ file.filename }}
            </item>
        </div>
    </div>
</template>

<script>
    import item from './ffshelf-display-item.vue';

    export default {
        props: ['url'],
        data: function() {
            return {
                files: [],
                selected: []
            }
        },
        mounted: function() {
            this.files.push({filetype:"document", filename: "Document", title: "Hello"});
            this.files.push({filetype:"els", filename: "Excel File"});
            this.files.push({filetype:"ppt", filename: "PowerPoint"});
            this.files.push({filetype:"pdf", filename: "PDF"});
            this.files.push({filetype:"file", filename: "the name has been overflow"});
            this.files.push({filetype:"pic", filename: "Picture", thumbnail: "https://lh3.googleusercontent.com/dB3Dvgf3VIglusoGJAfpNUAANhTXW8K9mvIsiIPkhJUAbAKGKJcEMPTf0mkSexzLM5o=w300"});
        },
        components: {
            "item": item
        },
        methods: {
            onSelect: function(file) {
                this.selected.push(file);
                console.log(this.selected);
            },
            onCancel: function(file) {
                let index = this.selected.indexOf(file);
                this.selected.splice(index, 1);
                console.log(this.selected);
            }
        }
    }
</script>

<style lang="scss" module>
    .ffshelf-display {
        left: 240px;
        position: absolute;
        padding: 30px;
        width: 720px;
        height: 640px - 57px;
        box-sizing: border-box;
        .item-container {
            height: 100%;
            width: 100%;
            overflow-x: hidden;
            overflow-y: auto;

            &::-webkit-scrollbar {
                width: 4px;
            }

            /* Track */
            &::-webkit-scrollbar-track {
                background-color: rgba(0,0,0,0);
            }

            /* Handle */
            &::-webkit-scrollbar-thumb {
                background: #CFD8DC;
                border-radius: 1px;
            }

            /* Handle on hover */
            &::-webkit-scrollbar-thumb:hover {
                background: darken(#CFD8DC, 20%);
            }

        }

    }
</style>