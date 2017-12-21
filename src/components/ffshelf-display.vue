<template>
    <div class="ffshelf-display">
        <div class="item-container">
            <item filetype="document" thumnail="">Document</item>
            <item filetype="els">Excel</item>
            <item filetype="ppt">PowerPoint</item>
            <item filetype="pdf">PDF</item>
            <item filetype="file">Other file f dsf df sd </item>
            <item filetype="pic" url="https://lh3.googleusercontent.com/dB3Dvgf3VIglusoGJAfpNUAANhTXW8K9mvIsiIPkhJUAbAKGKJcEMPTf0mkSexzLM5o=w300">
                Image
            </item>
        </div>
    </div>
</template>

<script>
    import item from './ffshelf-display-item.vue';

    export default {
        components: {
            "item": item
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