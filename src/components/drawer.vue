<template>
    <div class="dialog-drawer">
        <ul>
            <item v-for="folder in folders"
                  :item="folder"
                  v-on:click="onClick">
                {{folder.name}}
            </item>
        </ul>
    </div>
</template>

<script>
import drawer_item from './drawer-item.vue'
export default {
    props: ["url"],
    data: function() {
        return {
            folders: []
        }
    },
    mounted: function() {
        this.folders.push({name: "category1", id: "category_12372491123", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category2", id: "category_12373391123", icon: "fa fa-paper-plane"});
        this.folders.push({name: "category3", id: "category_12371391123", icon: "fa fa fa-bell"});
        this.folders.push({name: "category4", id: "category_12371291123", icon: "fa fa fa-bug"});
        this.folders.push({name: "category5", id: "category_12372191123", icon: "fa fa-cog"});
        this.folders.push({name: "category6", id: "category_12372123423", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category7", id: "category_12372442423", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category8", id: "category_12372491413", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category9", id: "category_12372411213", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category10", id: "category_12372492123", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category11", id: "category_12372121123", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category12", id: "category_12334491123", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category13", id: "category_12351491123", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category14", id: "category_12124491123", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category15", id: "category_12352491123", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category16", id: "category_12352411123", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category17", id: "category_12352721123", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category18", id: "category_12312311123", icon: "fa fa-file-image-o"});
        this.folders.push({name: "category19", id: "category_12123411123", icon: "fa fa-file-image-o"});
    },
    methods: {
        onClick: function(item) {
            console.log(item);
        }
    },
    components: {
        'item': drawer_item
    }
}
</script>

<style lang="scss" module>

    .dialog-drawer {

        width: 300px;
        height: 600px;
        position: absolute;
        left: 0;
        top: 0;
        box-sizing: border-box;
        z-index: 1002;
        border-right: 1px #ccc solid;
        padding: 30px 0;
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
            background: #546E7A;
            border-radius: 1px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #37474F;
        }

        ul {
            margin: 0;
            list-style: none;
            padding: 0;

            & > li {
                cursor: pointer;
                float: left;

                & > a {

                    width: 200px;
                    float: left;
                    margin: 0 50px;
                    padding: 10px 30px;
                    box-sizing: border-box;
                    border-radius: 3px;
                    font-size: 14px;

                    transition: background-color 0.5s;

                    &:hover {
                        background-color: #EEEEEE;
                    }

                    i {
                        width: 20px;
                        margin-right: 10px;
                        font-size: 14px;
                    }

                }

            }

        }

    }

</style>