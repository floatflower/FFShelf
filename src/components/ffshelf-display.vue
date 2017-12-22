<template>
    <div class="ffshelf-display">
        <div class="item-container">
            <item v-for="file in files"
                  v-bind:file="file"
                  v-on:select="onSelect"
                  v-on:cancel="onCancel">
                {{ file.name }}
            </item>
        </div>
    </div>
</template>

<script>
    import item from './ffshelf-display-item.vue';

    export default {
        props: ['category'],
        data: function() {
            return {
                files: [],
                selected: [],
                cache: {}
            }
        },
        watch: {
            category: function(val) {

                if (!this.cache[val.id]) {
                    var getUrl = val.getUrl;
                    this.$http.get(getUrl).then(function (response) {
                        this.files = eval(response.body);
                        this.cache[val.id] = this.files;
                    }, function (response) {

                    });
                }
                else {
                    this.files = this.cache[val.id];
                }
            }
        },
        mounted: function() {

        },
        components: {
            "item": item
        },
        methods: {
            onSelect: function(file) {
                this.selected.push(file);
                this.$emit('select', file)
            },
            onCancel: function(file) {
                var index = this.selected.indexOf(file);
                this.selected.splice(index, 1);
                this.$emit('cancel', file);
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