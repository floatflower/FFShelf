<template>
    <div class="item-thumbnail">
        <img v-if="hasThumbnail" :src="thumbnailSrc"/>
        <component v-if="!hasThumbnail" :is="icon"></component>
    </div>
</template>

<script>
    // The icons downloaded from https://www.flaticon.com/packs/file-types

    import icon_document from './icons/icon_document.vue';
    import icon_els from './icons/icon_els.vue';
    import icon_ppt from './icons/icon_ppt.vue';
    import icon_pdf from './icons/icon_pdf.vue';
    import icon_file from './icons/icon_file.vue';
    import icon_picture from './icons/icon_picture.vue';
    import icon_zip from './icons/icon_zip.vue';
    import icon_csv from './icons/icon_csv.vue';
    import icon_jpg from './icons/icon_jpg.vue';
    import icon_png from './icons/icon_png.vue';
    import icon_compress from './icons/icon_compress.vue';
    import icon_txt from './icons/icon_txt.vue';
    export default {
        data: function() {
            return {
                icon: '',
                thumbnailSrc: '',
                hasThumbnail: false,
                supportFileType: ['picture', 'png', 'jpg', 'gif', 'bmp',
                                  'compress', 'zip', 'rar', '7z',
                                  'document', 'els', 'ppt', 'pdf', 'file', 'csv', 'txt'],
                noIconPictureType: ['gif', 'bmp', 'svg'],
                noIconCompressType: ['7z', 'rar', 'iso']
            }
        },
        mounted: function() {
            if (this.src && this.src !== '' && this.src.length != 0) {
                // if src defined
                this.thumbnailSrc = this.src;
                this.hasThumbnail = true;
            }
            if (this.supportFileType.indexOf(this.type) === -1) {
                this.icon = "icon_file";
            } else if (this.noIconPictureType.indexOf(this.type) > -1){
                this.icon = "icon_picture";
            } else if (this.noIconCompressType.indexOf(this.type) > -1) {
                this.icon = "icon_compress";
            } else {
                this.icon = "icon_" + this.type;
            }
        },
        props: ["src", "type"],
        components: {
            'icon_picture': icon_picture,
            'icon_document': icon_document,
            'icon_els': icon_els,
            'icon_ppt': icon_ppt,
            'icon_pdf': icon_pdf,
            'icon_file': icon_file,
            'icon_zip': icon_zip,
            'icon_csv': icon_csv,
            'icon_jpg': icon_jpg,
            'icon_png': icon_png,
            'icon_compress': icon_compress,
            'icon_txt': icon_txt
        }
    }
</script>

<style lang="scss" module>
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
</style>